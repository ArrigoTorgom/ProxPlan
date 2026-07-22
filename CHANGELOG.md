# Changelog

All notable changes to the Design Basis Builder are documented in this file.

## [1.0.0] - 2026-07-22

Initial deployable release of the Design Basis Builder web app — a single-file, no-build HTML tool for compiling a tender Design Basis document from a customisable set of process blocks.

### Added
- Three-panel workflow: Document Info, Content Editor, Preview & Export.
- Five editable sections: Executive Summary, Project Parameters, Feed Water Quality (with Similar Applications benchmarking), Process Configuration, and Materials of Construction.
- Process Configuration blocks are fully dynamic — add, remove, reorder, and rename process units (UF, RO, or any other flowsheet block) rather than being hard-coded to a fixed set.
- Configurable Case Columns (default: a single "Value" column) that can be expanded into Min / Ave / Max or any other case set, applied consistently across Project Parameters and Process Configuration.
- Risk rating (High / Medium / Low) on every row, rendered as a fixed-size badge/dropdown that stays uniform in width down the page regardless of table content.
- Section 4 (Process Configuration) block tables auto-align their columns with each other based on real content width, without affecting any other section.
- Column width caps on long free-text fields (e.g. Design Margin) so an unusually long entry wraps within its own column instead of collapsing neighbouring columns.
- Export to PDF via the browser's native print dialog.
- Export/Import of the underlying data as raw JSON for record-keeping and revision tracking.
- JSON import performs a non-destructive merge against the current template shape, so files saved from an older or differently-shaped version of this tool still load safely, backfilling any new fields with defaults.

### Verified
- Structural regression suite (add/remove rows, blocks, and case columns; JSON export/import round-trip) passes with no exceptions.
- Real-browser layout check confirms Process Configuration block columns render pixel-identical across blocks, Risk badges stay fixed-width everywhere, and long Design Margin text no longer collapses adjacent columns.

## [1.0.1] - 2026-07-22

### Added
- Browser tab favicon using the Proxa droplet mark in brand orange.

## [1.1.0] - 2026-07-22

### Added
- Section 6, Commercial Risk / Impact — Parameter / Impact / Risk columns, for commercial and contractual exposures alongside the technical design (structure only for now; more columns can be added later the same way Case Columns and Materials columns are).
- **Save Draft** — exports everything currently filled in as JSON, for record-keeping or picking the document back up later.
- **Save as Template** — exports a blank, reusable version of the current document: keeps the structure you've built (process blocks, case columns, materials columns, and every Parameter/UOM/Category label) but clears project-specific answers (document control fields, values, design margins, notes, comparison values, material selections, commercial impact text) and resets Risk to its default, so the next tender starts from this shape without carrying over confidential data.
- Import JSON accepts files saved from either button interchangeably, and still backfills any section an older save is missing (including Section 6, for files saved before this update).

## [1.2.0] - 2026-07-22

### Changed
- Save Draft, Save as Template, and Import JSON moved from the header into a new "Save & Load" card on the Document Info tab, alongside a new "Templates" card — everything to do with starting, saving, or loading a document now lives on one page.

### Added
- Built-in template gallery on the Document Info tab: a small, fixed set of ready-made flowsheet shapes (shipped inside the file itself, no server or browser storage involved) that can be loaded with one click:
  - **Blank — UF + RO (Default)** — the standard starting point.
  - **AMD / Metals Removal (Multi-Stage)** — an 8-block flowsheet shape (Metal Oxidation, Feed Clarifier, UF Stage 1 & 2, RO Stage 1, Gypsum Reactor-Clarifier, Soda Ash Reactor-Clarifier, RO Stage 2) for metals-laden feed projects.
- Loading a template confirms first, since it replaces everything currently in the editor.

### Notes
- Template visibility is intentionally file-based for now (no browser storage), per the tool's existing "everything is a portable JSON file" design. A linked-folder option (Chrome/Edge only, via the File System Access API) was considered for a shared, growing template library and may be explored later.

## [1.3.0] - 2026-07-22

### Changed
- Replaced the placeholder favicon with the official Proxa droplet mark, supplied as a proper icon set (16/32/48/64/180/192/512px PNGs) rather than a hand-drawn approximation. Covers browser tabs, bookmarks, and "add to home screen" (iOS via apple-touch-icon, Android/desktop via the larger sizes) — still fully self-contained, embedded as data URIs with no extra files.

## [1.4.0] - 2026-07-22

### Changed
- Document Info tab card order is now Document Control Fields, Case Columns, Templates, Save & Load.
- Text entry blocks (intros, summary/notes/impact fields, footnotes) now autofit their height to their content — they grow as you type and shrink back down, instead of staying a fixed size with a manual resize handle.
- Spelling-error squiggles now only show up while a field is actively focused, instead of on every field all the time; they appear when you click in and disappear when you click away.
- The Risk dropdown in the editor now fills the width of its own column instead of a fixed 76px, matching however wide that column actually is; Section 4 (Process Configuration) block tables continue to keep their Risk columns aligned with each other, now based on real measured width rather than a hardcoded number.

### Verified
- Real-browser check confirms: intro textarea height grows and shrinks correctly with content, the spellcheck-toggle logic correctly turns on/off on focus/blur, and the Risk dropdown fills its column (and stays aligned across UF/RO block tables) in both Project Parameters and Process Configuration.
