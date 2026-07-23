# ProXPlan Changelog

All notable changes to ProXPlan are documented here.
Versioning follows `MAJOR.MINOR.PATCH` — patches are bug fixes, minor versions add features, major version 1.0 marks production-stable release.

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
