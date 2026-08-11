# ProXPlan Changelog

All notable changes to ProXPlan are documented here.
Versioning follows `MAJOR.MINOR.PATCH` — patches are bug fixes, minor versions add features, major version 1.0 marks production-stable release.

---

## [0.9.29] — 2026-08-11

### Added
- **Projects — photos & screenshots** — each project now has a Photos card; upload via the "+ Add" button, images are auto-resized (max 1600px) and compressed to JPEG before being stored in IndexedDB (a much larger quota than the `localStorage` used elsewhere in the app). Click a thumbnail to view it full-size in an in-app lightbox (closable via the × button, clicking the backdrop, or Escape) — no more opening a new browser tab. Photos are local to this browser/device only and are **not** included in the Export/Restore JSON backup (a note on the card says so)
- **Meeting reminders for in-app events** — the Add/Edit Event modal now has a "Remind me on this day" checkbox; checking it creates a linked entry in the existing reminder system (same banner, same Reminder Manager, tagged `(meeting)`), and stays in sync automatically if the event is later edited or deleted. Scoped to events created in ProXPlan only — Outlook-sourced events aren't covered yet

### Fixed
- **Timesheet — reordering projects sometimes needed two clicks** — `moveProjOrder()` swapped adjacent positions in the full project list (including archived projects), so if an archived project sat between two active ones, the first click silently swapped with the invisible archived neighbour instead of the visible one; it now finds the adjacent *active* project directly, so a single click always produces a visible reorder
- **Planner — weekly productivity tip was cycling on Thursday instead of Monday** — the rotation was bucketed by days-since-Jan-1 of the current year, so the flip day tracked whatever weekday Jan 1 fell on (a Thursday in 2026); now anchored to the app's Monday-of-week calculation, so it always changes exactly on Monday regardless of the year

---

## [0.9.28.10] — 2026-07-29

### Fixed
- **Corrupted CSS block from a prior patch session** — a stray fragment of terminal/transcript output (dated 2026-07-24) had been pasted into the stylesheet between the `.proj-link-del` and `.proj-link-edit` rules instead of clean CSS; removed
- **Timesheet — remove-activity button (`-`) sat on the far right of extra lines** — moved into the same absolutely-positioned slot as the add-activity button (`+`), at the seam between the activity and hours/% inputs, and resized 18px→20px to match; `.alloc-line{padding-right:24px}` now applies to all lines (not just the primary) so extra lines stay pixel-aligned with the primary row now that both use the same spacing mechanism
- **Timesheet — adding a new project wiped extra activity lines on other rows** — `addProject()` rebuilt the alloc grid via `renderAllocGrid()` without saving/restoring the current draft, unlike `moveProjOrder()` which already did this correctly; now saves the draft first and restores it (`applyDraftOrLog`) after rebuilding
- **Projects — renaming a project orphaned its existing tasks** — `saveProjectEdit()` already migrated timesheet log allocations from the old project name to the new one, but never updated `plannerTasks`; tasks silently dropped out of the Tasks tab and Projects detail view after a rename since nothing matched the old name anymore. Tasks now migrate the same way logs do
- **Projects — editing a task's priority/due date/etc. required switching tabs to see the change** — `saveQuickTask()` (shared by the Add Task modal and the Projects tab's Edit button) refreshed the Tasks tab after saving but had no equivalent branch for the Projects tab; added `renderProjectsTab()` when `currentTab==='projects'`
- **Timesheet — `+`/`-` activity buttons rendered on top of the sticky header and other page chrome while scrolling** — both buttons had `z-index:10000` with no ancestor establishing a stacking context, so they compared directly against every positioned element on the page instead of just their own row; lowered to a small, locally-scoped value
- **Timesheet — activity input/dropdown visually covered the `+`/`-` buttons while focused** — `.alloc-act-wrap:focus-within` raises to `z-index:50`, higher than the buttons; raised the buttons above that so they always stay on top regardless of focus state
- **Timesheet — activity dropdown detached from its input while scrolling, then (after the first fix) clipped against the Log Time card with an unwanted scrollbar** — `.act-dropdown` was originally `position:fixed` with coordinates computed once and never updated on scroll; switching it to `position:absolute` fixed the detachment but made it a real layout descendant of `.alloc-grid`, whose `overflow-x:auto` implicitly forces `overflow-y:auto` too (a CSS spec cross-axis coupling rule) — reverted to `position:fixed`, which naturally escapes ancestor overflow-clipping, and added active repositioning on `scroll`/`resize` while open to keep it correctly anchored
- **Timesheet — remove-activity button was always visible instead of fading in on hover like the add button** — now fades in the same way, but scoped to hovering its own line (`.alloc-extra-line:hover`) rather than the whole project row

---

## [0.9.28.9] — 2026-07-27

### Fixed
- **Timesheet — Log Time card restored to V0.9.28.2 layout** — reverted to the working `alloc-act-col` structure from V0.9.28.2 as the base, then re-applied the V0.9.28.3+ button improvements (`task-act-btn`, `loadLogForDate`) on top; this resolved the persistent vertical stacking regression introduced in V0.9.28.8
- **Timesheet — Log Time hours input showing "NaN"** — a `+\n+` pattern in the `renderAllocGrid` JS string concatenation caused JavaScript to parse the second `+` as a unary operator, converting the `alloc-input-wrap` HTML string to `NaN` instead of concatenating it; fixed by removing the newline between the two operators
- **Timesheet — projects rendering horizontally instead of vertically** — the `alloc-row` div was missing its closing `</div>` tag, causing each project row to nest inside the previous one; closing tag added
- **Timesheet — extra activity lines offset left vs primary row** — `addExtraLine` was inserting the activity input without the `alloc-act-col` wrapper, misaligning it from the primary row; wrapper added; a `padding-right: 24px` rule on the primary alloc-line (matching the `rm-extra-btn` width + gap of extra lines) ensures all rows align flush on both sides

---

## [0.9.28.8] — 2026-07-27

### Fixed
- **Timesheet — Log Time card layout reverted to V0.9.27 structure** — the `alloc-act-col` wrapper div introduced during V0.9.28.4 CSS recovery was the root cause of the persistent vertical stacking; it was removed entirely; `alloc-act-wrap` is now a direct flex child of `alloc-line` (matching the original V0.9.27 structure that worked correctly); `.alloc-lines` reverted from `flex-shrink:0` to `flex:1;min-width:0;` so the lines section correctly fills available row space; `.add-extra-btn` reverted to a simple `+ Activity` text link (no longer absolute-positioned) and is now positioned as a sibling after the `alloc-line` inside `alloc-lines`; `addExtraLine` updated to `insertBefore(btn)` (inserts new extra line before the `+ Activity` button) and restores activity-first order in the extra line HTML; all V0.9.28.x edit/delete button features (Log History `task-act-btn` style, `loadLogForDate`, Projects link buttons) are unchanged

---

## [0.9.28.7] — 2026-07-27

### Fixed
- **Timesheet — Log Time card alloc CSS consolidated** — the alloc CSS was fragmented across two separate locations in the normal zone (original block at ~pos 16 KB and a recovery-injected block at ~pos 43 KB) plus duplicate copies in the dark-mode media block; all rules are now unified in a single block, ensuring correct cascade and specificity; added missing `.alloc-extra-input` light-mode rule (extra activity lines were unstyled in light mode); removed `justify-content:flex-end` from `.alloc-line` (items now left-aligned within the row); `.alloc-act-col` simplified to `flex-direction:row`

---

## [0.9.28.6] — 2026-07-27

### Fixed
- **Timesheet — Log Time card alloc-line horizontal layout** — activity input and hours input were stacking vertically in some configurations; root cause was (a) missing explicit `flex-direction:row;flex-wrap:nowrap` on `.alloc-line`, (b) missing `flex:0 0 auto` on `.alloc-act-col` allowing it to expand unpredictably, and (c) an unclosed `@media(prefers-color-scheme:dark)` block that trapped all CSS from `.alloc-input` through `.no-projects` inside the dark-mode query, leaving those rules absent in light mode; a stray backslash in the same block was also removed
- **Projects — quick task priority indicator moved to right side** — the coloured priority dot on tasks in the Projects tab sidebar was previously rendered at the left edge of the row before the checkbox; it is now rendered immediately after the task title on the right side, with spacing from the title and before the due date badge

---

## [0.9.28.4] — 2026-07-24

### Fixed
- **CSS corruption recovery** — a prior patch accidentally deleted ~35 KB of CSS (everything from `.alloc-act-wrap` through `.no-projects`, plus `.task-row`, `.task-act-btn`, `.proj-link-row/url/desc-txt`, `.log-table`, `.history-controls`, `.pie-wrap`, `.col-chart`, `.act-dropdown`, and more); all rules have been restored and a mangled `.proj-link-row:hover` fragment has been corrected

---

## [0.9.28.3] — 2026-07-24

### Fixed
- **Timesheet — Log History Edit loads blank form** — the Edit button was calling `openTimeLogForDay` which prioritises any existing draft for that date over the saved log; if a draft was present (e.g. after clearing an entry) the form would load empty; a new `loadLogForDate` function always loads the saved log directly, bypassing the draft
- **Timesheet — Log History Edit requires date change first** — when the Log Time card already shows the target date, clicking Edit had no visible effect because `applyDraftOrLog` detected no date change; `loadLogForDate` forces the log to reload regardless of current date state
- **Projects — link Edit/Delete buttons pull left when no description** — the buttons were only right-aligned because the `flex:1` description span was conditionally rendered; the span is now always rendered (empty when no description), keeping buttons pinned to the right edge at all times

### Changed
- **Timesheet — Log History & Projects tab action buttons** — Edit and Delete buttons now use the same `task-act-btn` styling as the To Do tab (small bordered pill, muted by default, orange hover for Edit, red hover for Delete), replacing the previous custom pill button styles

---

## [0.9.28.2] — 2026-07-24

### Added
- **Timesheet — Log History edit button** — each history row now has an "Edit" button that loads that day's hours and activities back into the Log Time card (same behaviour as clicking Edit in the weekly calendar); the Delete button remains

### Changed
- **Projects — link action buttons** — Edit and Delete buttons on link rows are now styled as small pill buttons (orange outline for Edit, red outline for Delete) matching the app button style, replacing the previous symbol-only buttons
- **Version update reminder** — the in-app reminder message no longer includes the specific version number; it now reads "New features! Open Settings > Changelog to see what's new." so the message stays relevant without needing per-release updates

---

## [0.9.28.1] — 2026-07-24

### Changed
- **Projects — Links & Resources** — links are now added and edited via a modal (Label, URL, Description); the card shows a clean list of clickable hyperlinks with optional description text; the old inline description input and drag-to-resize column are removed
- **Projects — Add task** — reverted from modal button back to inline text input with an Add button; tasks can be typed and added without leaving the project detail view; Enter key submits
- **Version update reminder** — the in-app "new version" reminder now correctly fires on V0.9.28 (was still referencing V0.9.27)

### Reverted
- **To Do — subtask input auto-close on blur** — removed the click-out-to-close behaviour introduced in V0.9.28; the blur handler interrupted multi-subtask entry; subtask input still closes on Escape or Enter

---

## [0.9.28] — 2026-07-24

### Added
- **Projects — Add project from Projects tab** — a `+` button now appears beside the "Active Projects" heading in the left sidebar; clicking it opens the same Add/Edit Project modal as the Timesheet tab, so projects can be created without switching tabs

### Changed
- **Replicon export — clean number format** — hours values in the Replicon export no longer show trailing zeros (e.g. `2` instead of `2.00`, `5.5` instead of `5.50`); zero-hour cells are exported as blank

### Fixed
- **Timesheet — weekly calendar missing extra activity hours** — days with multiple activity lines per project were only counting primary hours in the calendar "⏱ Xh" badge; total now sums primary + all extra lines per project across all allocations
- **To Do — subtask input closes on click-out** — clicking anywhere outside the new-subtask input field now dismisses it cleanly (previously required pressing Escape or Enter)
- **Projects — archived projects not selectable** — clicking an archived project in the sidebar had no effect; the `onclick` handler was broken due to a string-quoting error in the template; archived projects are now clickable and load their detail view correctly

---

## [0.9.27.1] — 2026-07-22

### Changed
- **Timesheet — Log History badges** — extra activity lines are now shown as individual tags in the history table (e.g. `ProjectA 2.0h · Design` + `ProjectA 1.0h · Meeting`) rather than concatenated into a single project badge
- **Settings — First day of week** — manual Mon/Sun toggle removed; the calendar now auto-detects the first day of the week from your OS/system locale using the `Intl.Locale` API (falls back to Monday on unsupported environments)
- **Hours by Activity chart** — untagged hours now appear under `(unassigned)` instead of `(no activity)`

### Fixed
- **Timesheet — project re-order resets mode to %** — moving a project up/down in the Log Time card called `applyDraftOrLog` without first saving the current draft, causing the mode to fall back to the `%` default; the draft is now saved before the grid re-renders
- **Weekly planner — Sunday first-day-of-week shifts columns** — `getMonday` was returning Sunday when the first-day setting was Sunday, causing all weekday column headers to be off by one day (Monday shown as Tuesday etc.); the weekly planner always displays Mon–Fri and is no longer affected by the locale first-day setting
- **Timesheet — extra activity draft race condition** — `addExtraLine` called `saveDraft` on each programmatic insertion during log restore, saving incomplete intermediate states; a `_loadingExtras` flag now suppresses mid-loop saves and a single `saveDraft` fires after all extras are fully restored
- **Timesheet — Log History activity toggle removes extras** — toggling activity OFF now shows one combined-total badge per project (primary + all extra hours summed); toggling ON shows individual badges per activity line; previously toggling OFF displayed only primary hours, hiding extras entirely
- **Timesheet — extras saved with wrong hours in % mode** — extra activity lines logged in `%` mode were saving the raw percentage value as `hrs` (e.g. 30% stored as 30h); extras now store both `pct` and the correctly converted hours value
- **To Do — monthly calendar ignores system first day of week** — locale detection now extracts the region code from `navigator.language` (e.g. `us` from `en-US`) and matches against a curated list of Sunday-first regions, replacing the less reliable full language-string regex; falls back to Monday for unrecognised regions
- **Timesheet — activity dropdown covers + button** — the add-extra-activity button (`+`) was hidden behind the activity suggestion dropdown (z-index 9999); button z-index raised to 10000 so it stays visible and clickable while a dropdown is open

---

## [0.9.27] — 2026-07-21

### Added
- **Timesheet — Multiple activities per project (continued)** — `+ Activity` button now appears as a circled `+` on hover at the right edge of the activity pill; hidden by default to save vertical space, revealed on row hover
- **Reminders — once-only persistence** — one-time reminders now remain in the banner until explicitly dismissed, even after their scheduled date elapses; previously they disappeared at midnight

### Changed
- **Timesheet — Log Time layout** — Working Hours input moved to the top control bar (right of the Activity toggle), visible only in `hrs` mode; top bar order is now: Date → %/hrs → Activity toggle → Working Hours
- **Timesheet — Subtotal row** — "Subtotal" label and total figure are right-aligned together at the bottom of the alloc grid; OT amount (`+1.5h OT`) now appears on a separate line below the subtotal rather than inline (was causing row height misalignment)
- **Projects — Link column** — "Label" column heading renamed to "Link"; link anchor now matches column width; description input has a rounded pill border that highlights on focus
- **Reminders — sort order fixed** — one-time reminders now reliably sort first in the banner (a `0` priority value was falsy in JS, causing them to fall to the bottom; corrected to non-zero values so once > monthly > weekly > daily)

### Fixed
- **Timesheet — project rows horizontal** — a missing closing `</div>` in `renderAllocGrid` caused all project rows to share the same container, rendering side-by-side instead of stacked; corrected DOM structure
- **Timesheet — extra activities multiplying on toggle** — toggling activities off and on caused extra lines to double (3 → 6 → 9); root cause was the malformed DOM above; added a global pre-clear in `_loadExtras` as a safety net
- **Timesheet — OT row not hidden on mode switch** — switching from `hrs` to `%` mode left the OT figure visible; `updateTotal` in `%` mode now explicitly hides the OT row
- **Timesheet — OT row not hidden on clear** — `clearEntry` now hides the OT row alongside resetting other fields
- **Code hygiene** — removed dead CSS: `.tracker-wrap{}` (empty rule), `.total-display` (unused class with three sub-rules), `.total-row-tr .alloc-label` (selector targeting a node that no longer exists); unified Working Hours input padding to match other pill inputs (7px)

---

### Added (earlier in 0.9.27 session)
- **Timesheet — Multiple activities per project** — each project row in Log Time now has a `+ Activity` button that adds a second (or third…) activity line with its own hours and activity field; total project hours is the sum of all lines; Replicon export outputs a separate row per activity line
- **Timesheet — Hours by Activity chart** — `Activity` button added to the Hours chart toggle; aggregates logged hours across all activity tags (including extra lines) for a cross-project activity breakdown
- **Timesheet — Activity toggle on Log Time** — pill toggle on the Log Time card shows/hides activity fields; pill is orange when activity fields are visible, muted when hidden; preference persists in localStorage
- **Timesheet — Overtime tracking** — the Working Hours field (default 8h) sets the standard day threshold; hours logged above it appear as an OT badge (`+1.5h OT`) in the total row and Log History
- **Settings tab** — Settings moved from a header gear dropdown to a dedicated tab with a gear icon, consistent with the rest of the navigation
- **Reminders — version update notice** — a one-time reminder is created automatically when ProXPlan updates to a new version, prompting you to check the changelog in Settings

### Changed
- **Timesheet — toggle standard** — Activity toggle on Log Time, Activity toggle on Log History, and chart type buttons (Bar / Pie / Activity) all use the same pill-button style; active selection is accent-coloured
- **Timesheet — Replicon export** — column header row now appears once per week section instead of duplicating; extra activity lines per project each generate their own export row
- **Timesheet — Progress bars removed** — per-project allocation bars removed from the Log Time rows; the Hours by Project chart remains
- **Reminders — priority order** — in the banner and manager, one-time reminders appear first, then monthly → weekly → daily (least frequent = most prominent)
- **Projects — search includes archived** — searching in the Projects tab now surfaces archived projects inline with an `archived` tag badge; no need to expand the archived section manually
- **Settings — backup labels** — "Export all data" renamed to "Export data backup"; "Import / restore" renamed to "Restore from backup"
- **To Do — calendar heavy-week highlight** — the weekly highlight now marks the current week only (today's row) rather than any week with 3+ tasks due

### Fixed
- **Timesheet — delete entry** — delete button was silently failing because the date value was passed as arithmetic (`2026-07-10` evaluated to `2009`); now correctly quoted
- **Timesheet — draft lost on tab switch** — switching away from the Timesheet tab now saves the draft automatically so in-progress entries are not lost
- **Timesheet — hours input clears zero on focus** — the `0` placeholder clears when you click into a hours field so you can type without backspacing; restores `0` on blur if left empty
- **Timesheet — activity Tab key selection** — pressing Tab while the activity dropdown is open now selects the first suggestion and advances focus
- **Dark mode — reminder banner** — reminder banners now use the card background in manual dark mode and respect system dark mode preference; previously rendered with a light background in dark environments
- **Timesheet — Hours by Activity** — `renderSummary` now includes extra activity lines when computing per-project totals

---

## [0.9.26] — 2026-07-10

### Changed
- **Timesheet — Activity toggle icon** — replaced diamond glyph with a Tabler tag icon (`ti-tag`) plus an inline pill-shaped switch indicator; pill slides and turns accent-coloured when activity badges are on, muted when off

---

## [0.9.25] — 2026-07-10

### Added
- **Timesheet — Replicon grid export** — "By Week (Replicon)" export option produces a CSV grid with columns Task / Project / Billing / Activity followed by day columns (Mon–Sun) and a Total; rows are grouped by ISO week with a label row ("Week 28: 6 Jul – 10 Jul"); blank Task and Billing columns left intentionally for manual Replicon entry

---

## [0.9.24] — 2026-07-10

### Added
- **Timesheet — Activity toggle in log history** — header of the Log History card now has an "Activity" toggle button; activity labels are hidden by default in log badges (saves space) and can be shown on demand; preference persists in localStorage

---

## [0.9.23] — 2026-07-10

### Fixed
- **Timesheet — Export button** — Export modal was non-responsive; `openExportModal` and `doExport` function definitions were missing from the script block despite the button and modal HTML being present
- **Timesheet — Log Time input heights** — activity autocomplete field now matches the height of the hours input (`padding: 7px 10px`, `font-size: 13px`) so all inputs in each project row sit at a consistent vertical height

---

## [0.9.22] — 2026-07-10

### Added
- **Timesheet — Export modal** — "Export CSV" button replaced with "Export" which opens a modal with two options: *Full period list* (flat CSV matching the selected duration, same as before) and *By Week — Replicon* (one row per project/activity entry, grouped by ISO week with labels like "Week 28: 6 Jul – 10 Jul 2026", ready to copy into Replicon week by week)

---

## [0.9.14–0.9.21] — 2026-07-10

### Added
- **Projects — multi-tag support** — Project Tags field (formerly Activity Type) accepts comma-separated values; each tag renders as a separate badge on the project detail panel
- **Projects — search** — search bar filters the sidebar by project name, tender code, and tags simultaneously
- **Timesheet — pie chart layout** — legend left, chart right; chart fills available width responsively; capped at 50% of card width; bar/pie toggle persists in localStorage
- **Timesheet — Activity per project** — each project row in Log Time has a searchable activity autocomplete field (42-item list); activity saved per project per day, shown in log history badges and included in CSV export
- **Timesheet — Log Time layout** — activity field appears before hours input (label → activity → hours → bar)
- **Settings — Activity List management** — upload a CSV (one activity per row) to replace the dropdown list; download the current list; persists across data resets

### Changed
- **Projects — "Activity Type" renamed to "Project Tags"** in the Edit Project modal
- **Timesheet — Today button removed** from the date picker row; the calendar's native Today shortcut remains

### Fixed
- **Projects — summary height** — description textarea auto-expands on every render (no longer collapses on task toggles or link edits)
- **Projects — Links & Resources column width** — dragged width re-applied after every panel re-render
- **Deploy script** — corrected MSAL injection so main app JS stays inside its `<script>` block (previously ejected JS rendered as visible text)

---

## [0.9.13] — 2026-07-09

### Fixed
- **Reminder cards — dark mode** — banner and peek cards now use solid opaque backgrounds consistent with the rest of the dark theme; no longer clashes with surrounding cards
- **Reminder stack — collapse** — clicking anywhere on the expanded stack (outside Snooze / Dismiss buttons) collapses it back to the deck view; "hide" button removed for cleaner UI
- **Reminder stack — peek cards** — all peek cards use identical colour in light mode; bottom card no longer appears darker than the others
- **Reminder — one-time dismissal** — dismissing a once-off reminder removes it from the list entirely; recurring reminders remain until manually deleted
- **Reminder form** — Add button matches the primary orange style used on all other Add buttons; "+" prefix removed for consistency; Enter key submits the form
- **+ Log hover** — the `+ Log` button in the weekly calendar now highlights on hover, consistent with `+ Event` and `+ Task`

---

## [0.9.12] — 2026-07-09

### Added
- **Reminder stack (Planner tab)** — when multiple reminders are due, they appear as a deck of cards: front card shows the first reminder with a `+N more` badge and ghost cards peeking behind; click to expand the full list with individual Snooze / Dismiss controls; a chevron + "hide" collapses back to the stack

### Changed
- **Reminder count in To Do summary bar** — 🔔 chip added alongside Open / Done counts; click to toggle the reminder manager panel open without scrolling; panel is hidden by default

---

## [0.9.10] — 2026-07-09

### Changed
- **Reminder form compact layout** — title input, frequency dropdown, and Add button now sit on a single row; title field fills available width automatically

---

## [0.9.9] — 2026-07-08

### Added
- **Reminders** — set one-time or recurring reminders (daily / weekly by day-of-week / monthly by day-of-month); active reminders appear as amber banners above the Planner section cards; dismiss clears for the day, snooze defers until tomorrow
- **Reminder management in To Do tab** — reminder manager card (add, edit, remove) sits below the task list in the To Do left column for easy access at any screen width
- **Log hours reminder unified** — "Log your hours" now appears through the same banner system as all user reminders; auto-hides once hours have been logged for the day; can be snoozed, dismissed, edited, or removed like any reminder

### Changed
- **Timesheet layout** — Log Time entry form moved to the left column (alongside Active Projects); Hours by Project chart moved to the right column (alongside Log History)
- **Chart type toggle** — Hours by Project supports Bar and Pie views toggled from the card header; selection persists in localStorage
- **Links & Resources column resize** — replaced the range slider with a draggable column separator (⋮) in the table header row; width persists in localStorage

---

## [0.9.4] — 2026-07-03

### Fixed
- **Planner section pills — timezone bug** — week boundaries (This Week / On the Horizon) were calculated in UTC, shifting them one day early for SAST users; Friday tasks appeared in On the Horizon and Sunday appeared as the week start. All date comparisons now use local SAST timezone via `localIsoDate()`
- **Last Week & Follow Ups placeholder text** — clearing the editable section left a residual `<br>` tag that prevented the grey italic placeholder from reappearing; normalised on every keystroke

### Added
- **Task pills on all planner section cards** — each card now shows relevant tasks as coloured chips below the notes area:
  - *Last Week & Follow Ups* — overdue tasks (due before the current week, not yet done)
  - *Priority* — high-priority tasks due this week or earlier, plus high-priority tasks with no due date
  - *This Week* — medium/low-priority tasks due within the displayed week (high-priority tasks are shown in Priority only — no duplication)
  - *On the Horizon* — tasks due in the three weeks after the displayed week
- **Empty state text on all pill sections** — when no tasks qualify, each section shows a descriptive italic message instead of collapsing silently (e.g. "No overdue tasks — all caught up", "No tasks due this week")
- **+N more indicator** — when more than 8 tasks qualify for a section, a grey chip shows the count of hidden tasks

---

## [0.9.3] — 2026-06-30

### Removed
- **Split screen** — split view feature removed entirely; button, CSS, localStorage key, and all related logic cleaned up

---

## [0.9.2] — 2026-06-30

### Fixed (Critical)
- **Graph API URL typo** — malformed `$orderby` parameter broke Outlook calendar loading for all MSAL-authenticated users
- **Priority sort in project view** — `high` priority (value `0`) was falsy, causing high-priority tasks to sort identically to medium in the grouped To Do view
- **Timesheet delete wrong entry** — deleting a log entry while a search/period filter was active deleted the wrong entry (index mismatch between filtered view and full array); now identified by date
- **Project dropdown not refreshing** — adding or renaming a project while on the Tasks tab never updated the `+ Project` selector (function targeted a non-existent element ID)
- **Event modal white background in system dark mode** — the quick-task and meeting modals rendered with a white background for users in system dark mode who had not manually toggled the dark mode switch

### Fixed (Minor)
- **Timesheet date off-by-one at midnight** — entry date used UTC (`toISOString`), showing yesterday's date between midnight and 2am SAST; now uses local date via `todayStr()`
- **Low-priority chip contrast in dark mode** — `.stask-chip.low` colour override was present in the media-query dark block but missing from the `body.app-dark` block
- **Orphaned CSS closing brace** — stray `}` after `.event-pill.manual` caused browsers to silently drop subsequent rules in the system-dark path
- **Duplicate `.day-head` dark rule** — removed redundant identical rule that risked silent divergence
- **`.tmc-combined` selector missing `body` prefix** — `.app-dark .tmc-combined` corrected to `body.app-dark .tmc-combined`
- **Duplicate project name** — silently discarded the entry with no feedback; now shows an alert
- **XSS hardening** — `acct.username` in the Settings MSAL status display now escaped with `escH()`

### Performance
- **Removed unnecessary Outlook calendar network calls** — task toggle, add, delete, subtask, and note operations were all triggering a Microsoft Graph API request; calendar events don't change on task updates; calls now only fire on week navigation, tab switch, and timesheet save/delete

---

## [0.9.1] — 2026-06-30

### Added
- **`+ Project` selector on To Do add-task form** — optional manual project override next to `+ Notes`; auto-suggest hint hides when selector is open; resets after task is added
- **Sort by Due Date / Priority in To Do** — flat sorted list view across all projects; subtasks, notes, and quick-note expansion now shown in flat views (previously stripped)

### Fixed
- Priority buttons visually unresponsive in dark mode — `!important` on base `.pri-btn` overrode active-state colours; fixed with matching `!important` on active states
- Archived projects appearing in To Do sort views — `renderTasksPanel` was calling `getProjects()` instead of `getActiveProjects()`
- URL pills in Projects tab stretching beyond window width — root cause was `min-width:auto` on the CSS grid column; fixed with `min-width:0` on `.proj-main` and `.proj-card`

---

## [0.9] — 2026-06-29

### Added
- **Projects tab** — dedicated project hub with sidebar navigation, summary field, links & resources, open task list, and total hours logged
- **Archive / Restore** — archive inactive projects; they disappear from Timesheet and task dropdowns but remain accessible in the Projects tab under a collapsible Archived section
- **Subtasks** — add, complete, and delete subtasks inline on any To Do task; Enter key adds successive subtasks without losing focus
- **Quick-complete on calendar pills** — hover a task pill in the Weekly view to reveal ✓ (complete) and ✎ (edit) buttons
- **Period filter on log history** — filter timesheet history to last 7 / 30 / 90 days or all time
- **Hours alongside % in history** — percentage-mode log entries now show both `45% (3.6h)` in history badges
- **Feature Request link** — Settings footer opens a pre-addressed email to request features
- **Version badge** — Settings footer displays current version (V0.9) with link to this changelog

### Changed
- **Last Week & Follow Up auto-fill** — now produces a focused summary: overdue deliverables, completed high-priority tasks, and new projects with no timesheet history (previously imported all notes/meetings/time indiscriminately)
- **Project tags in Timesheet** — show name only; code and activity type are accessible via click-to-edit
- **Calendar task pill click** — clicking a pill navigates to the To Do tab; edit and complete actions are on hover buttons
- **Project edit** — renaming a project now also rekeys all historical log entries to the new name

### Fixed
- Project dropdown showing `[object Object]` when adding tasks from the weekly calendar
- Timesheet hours-by-project chart colours broken after project data migration
- Note editor duplicating existing note text on save
- Subtask Enter key stopping after first addition
- To Do tab button broken by over-aggressive string escaping

---

## [0.8] — 2026-06-22

### Added
- **Click-to-edit projects** — project tags in Timesheet open an editor for Name, Project/Tender Code, and Activity Type
- **Project metadata** — projects now store code and activity type alongside name; data migrates automatically from legacy string format

### Changed
- Projects stored as objects `{name, code, activityType}` instead of plain strings; backward compatible

---

## [0.7] — 2026-06-18

### Added
- **Timesheet draft autosave** — partial entries persist between tab switches and are restored on return; switching date loads that date's saved log or clears the form
- **Meeting edit modal** — calendar meeting pills now support click-to-edit including date change
- **Quick note on tasks** — hover a To Do task row to reveal Edit, Note, and Delete buttons; Note opens an inline textarea that saves with Enter

### Fixed
- Calendar event pills extending past column boundary
- Task action buttons causing layout shift on hover (switched to `visibility` instead of `display`)
- Enter key inconsistencies across note, meeting, and task inputs

---

## [0.6] — 2026-06-15

### Added
- **Developer password gate** — Outlook Calendar settings hidden behind a `proxdev` password; resets on reload
- **Colour palette options** — four Proxa brand palettes (Orange, Teal, Blue, Navy) selectable in Settings
- **Dark mode toggle** — Light / System / Dark; persists across sessions
- **Spellcheck suppression** — underlines hidden when a note field is not focused

### Fixed
- Week calendar column widths made uniform regardless of content

---

## [0.5] — 2026-06-10

### Added
- **GitHub Pages deployment** — single-file `index.html` with MSAL bundle inlined; no server required
- **DEPLOY.md** — step-by-step guide for GitHub Pages and Netlify deployment
- Custom domain support documented (CNAME to GitHub Pages)

---

## [0.4] — 2026-06-08

### Added
- **Microsoft 365 calendar integration** — MSAL authentication for Outlook calendar events displayed in the weekly planner
- `http://localhost` redirect URI support for local file:// usage

---

## [0.3] — 2026-06-05

### Added
- **To Do tab** — task management with projects, priority levels (High / Medium / Low), due dates, and notes
- Tasks appear as pills in the weekly calendar on their due date
- Project grouping with Active / All / Done filter per project
- Quick-add task input per project group

---

## [0.2] — 2026-06-03

### Added
- **Timesheet tab** — daily time logging against active projects in hours or percentage mode
- Hours-by-project summary chart with period filter
- Log history with search and CSV export
- Draft autosave between sessions

---

## [0.1] — 2026-06-01

### Added
- Initial release: weekly planner with editable sections (Priority, This Week, Last Week & Follow Ups, Notes)
- Manual meeting/event entry on the weekly calendar
- Week navigation and today highlight

---

## Versioning Roadmap

| Version | Theme |
|---------|-------|
| 0.9.x | Bug fixes from active testing |
| 0.10 | Outlook calendar enabled for all users; any remaining UX polish |
| 0.11 | Potential shared/multi-user data layer |
| 1.0 | Stable production release — all core features working, Outlook integrated, no known critical bugs |

**Patch increments (0.9 → 0.9.1):** bug fixes, copy tweaks, minor visual adjustments — no new functionality.  
**Minor increments (0.9 → 0.10):** new tab, new feature, meaningful workflow addition.  
**Major increment (0 → 1):** production milestone — stable, tested, Outlook integrated.
