# ProXPlan Changelog

All notable changes to ProXPlan are documented here.
Versioning follows `MAJOR.MINOR.PATCH` — patches are bug fixes, minor versions add features, major version 1.0 marks production-stable release.

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
