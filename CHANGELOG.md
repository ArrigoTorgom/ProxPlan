# ProXPlan Changelog

All notable changes to ProXPlan are documented here.
Versioning follows `MAJOR.MINOR.PATCH` — patches are bug fixes, minor versions add features, major version 1.0 marks production-stable release.

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
