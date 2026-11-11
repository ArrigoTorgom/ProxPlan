# ProXPlan Changelog

All notable changes to ProXPlan are documented here.
Versioning follows `MAJOR.MINOR.PATCH` — patches are bug fixes, minor versions add features, major version 1.0 marks production-stable release.

---

## [0.64.0] — 2026-11-11

### Added
- Right-click a table cell in a note or a project description to change the table: insert a row above or below, insert a column to the left or right, delete the row, delete the column, or delete the whole table. New rows and columns start empty, a new column in a header row gets a header cell, and the cursor moves into the new cell. Deleting the only row or column removes the table.
- Deleting a row, column or table shows a short message with an Undo button, since the browser's own undo does not cover these changes.
- Changes are saved as you make them. Right-clicking anywhere else still opens the normal browser menu.

---

## [0.63.0] — 2026-11-11

### Added
- Notes and project descriptions can now hold tables. A table pasted from Claude (Markdown or selected text), Excel, Word or a web page stays a real table, with thin borders and a shaded bold header row that suit light and dark mode. You can click into any cell and type. Colours, widths and merged cells are dropped on paste, and each cell keeps its bold, italics and links.
- A table wider than the screen scrolls sideways inside the note instead of stretching the page.
- Tables come through in note exports: the PDF and email copy show them as rows (the email copy as a bordered table), and the plain-text version uses one line per row with " | " between cells.

### Changed
- Very large pasted tables (more than 50 rows or 300 cells) and tables nested inside tables are still pasted as plain lines, one per row, so a note stays light. Row and column insert/delete controls are not included yet.

---

## [0.62.0] — 2026-11-11

### Added
- Pasting formatted text from Claude (or any web page) into a note or a project description now keeps the formatting instead of leaving raw symbols behind. Text copied with Claude's Copy button (Markdown) is converted: `**bold**`, `*italic*`, `~~strike~~`, `[links](url)`, bullet and numbered lists (including nested ones), and `# headings` (shown as a bold line). Text you select and copy from a chat or web page is cleaned the same way: its lists, bold, italics, links and headings are kept, while colours, fonts and sizes are dropped so nothing turns up white-on-white in dark mode. Tables become one line per row with the header in bold, and code blocks become plain lines.
- Ordinary text (a sentence, a single URL, text with only colour or size styling) still pastes as plain text, and a single pasted address still becomes a link.

### Changed
- The project description box now cleans pasted content as it goes in, instead of only when it is saved.

---

## [0.61.2] — 2026-11-10

### Changed
- In the Plan Day block editor, the block's time now sits next to the "Edit block" / "New block" heading (before the "Saved" tick), and Delete is back at the left of the button row with Done (or Cancel / Add block) on the right. The editor keeps the same compact height.

---

## [0.61.1] — 2026-11-10

### Changed
- The block editor in Plan Day now uses less height. Project and Activity sit side by side on one row, and Goal and Task on the next. The block's time moved onto the button row beside Delete / Done (or Cancel / Add block). On a normal desktop width the editor is about a third shorter, which leaves more room for the timeline. On a phone the fields stack in one column as before.

---

## [0.61.0] — 2026-11-10

### Added
- Planned time is now freed when a task no longer needs it. Parking a task as Someday, marking it done, setting it to Waiting, or deleting it removes its upcoming planned blocks, so that time is open again for other work and the week strip and Plan Day update straight away. This applies to every way of changing a task (row menus, the Edit dialog, ticking it off).
- Only blocks linked to the task are affected, and only blocks from now onwards. Past days are never touched. A block that is part-way through today is trimmed to the time already gone, so your logged time stays right.
- A short message says how much time was freed (for example "Parked: freed 3.75h of planned time over 3 days") with a Restore button for 12 seconds. Restore puts the blocks back. Deleting a task has no Restore, since it already asks first.

### Changed
- Planning time for a parked task (dropping it on a day or using Plan) moves it back to your list, since you've decided to work on it.
- The block editor's task list no longer offers tasks that are waiting (unless the chase date has arrived) or parked.

---

## [0.60.0] — 2026-11-10

### Changed
- On the To Do tab, dropping a task on a day in the week strip now plans time for it instead of changing its due date. A block is added in the first free slot inside your working hours (sized to the unplanned part of the estimate, 30 minutes to 2 hours, or 1 hour with no estimate). If the task's project can't be used, Plan Day opens on that day with a new block ready so you pick the project. If the day has no free working time you get a message instead.
- Due dates are now changed only in the task details (or the Edit dialog). The due date on a task row is a label, and its click-to-change menu is gone, so a due date stays a deadline however you plan the work.
- The week strip now takes everything planned for a task into account, on any day. A task due Friday with 2 hours planned on Wednesday only shows its unplanned remainder against Friday, so the same hours are never counted twice. The Today star is unchanged and still just keeps a task in front of you.

### Added
- A "Plan" button on task rows opens a quick menu of your next working days (with how much free time each has) or a date picker, and plans time for the task on the day you choose.
- Task rows show where they are planned, for example "Planned Wed 11 · 1h to plan". Hover for each day and how much of the estimate is still unplanned; click it to open that day in Plan Day.

---

## [0.59.0] — 2026-11-10

### Added
- On the To Do tab, the day workload bars in the week strip now include planned work. Time you have blocked out in Plan Day shows as a green segment between meetings (purple) and tasks, and the day card says how much is planned (for example "3h planned"). A task that already has a planned block is not counted twice: only the part of its estimate not yet covered by a block counts as task time. The "over capacity" warning now takes planned work into account, and the strip updates as soon as you change a block.
- Any planned block can now be linked to a task, not just ones added from the Up next suggestions. The block editor (new or existing) has a "Link to a task (optional)" list of your open tasks, with tasks from the block's project first. Picking a task fills in the goal and project if they are empty, and hovering a block shows which task it is linked to. Linked blocks count towards the task's time spent, and tasks with a planned block stop showing up in Up next. Choose the blank option to unlink.

---

## [0.58.2] — 2026-11-10

### Fixed
- In Plan Day, the working-hours summary strip no longer wraps onto a second line when a day has a lot planned outside working hours. The orange warning now reads "3h 30m outside hours" (hover for the full wording), the progress bar is a little shorter, and the week total ("Week: 27h 15m of 40h") stays in one place at the right.

---

## [0.58.1] — 2026-11-10

### Changed
- In Plan Day, the lunch (and other break) band is now hatched in the same grey as the areas outside your working hours, instead of a pale orange tint that looked too much like a planned block. It keeps its "Lunch" label.

---

## [0.58.0] — 2026-11-10

### Added
- Overtime balance in Log History. A line above the list shows your running overtime (for example "Overtime balance +6h 30m"), made up of the overtime on each logged day up to today, less anything you have recovered. Overtime on days still to come is not counted.
- Clear or recover overtime. Click "Clear or recover" to record hours taken as time off in lieu or paid out: enter the hours (it starts at your full balance), the date and an optional note, then Record. "Clear all" takes the whole balance to zero in one click. The hours are listed under Recovered, each with a Remove button that puts them back into the balance if you make a mistake. Your daily "+1h OT" badges are unchanged, and the hours recovered are stored with your time logs, so they back up and sync with them.

### Changed
- The Log History list now only shows days up to today. Public holidays and other leave that is already booked for future dates no longer fill the list, and appear as soon as they arrive.

---

## [0.57.1] — 2026-11-10

### Changed
- The timesheet's Working Hours box is no longer editable. It now just shows the hours for that day from Settings > Working Hours (for example "Working hours 8h 15m", or 7h on a short Friday), and overtime is whatever you log above them.
- A day outside your working week (a weekend, or a day you have switched off) has no working hours, so everything logged on it counts as overtime. Before, it was treated as an 8-hour day.
- Overtime is now shown to the minute, for example "+45m OT" or "+1h 45m OT", instead of rounded to a tenth of an hour (9h on an 8h 15m day used to read "+0.8h").
- Changing your working hours in Settings updates any date you have not saved yet. Entries you saved earlier keep the working hours they were saved with, so past overtime does not change.

---

## [0.57.0] — 2026-11-10

### Added
- The Plan Day view now shows your working hours (Settings > Working Hours) as an indication. Nothing is blocked: you can still plan blocks and meetings anywhere, including outside your hours, on weekends and over lunch.
  - Time outside working hours is hatched on the timeline, and breaks such as lunch are shown as a labelled band. A non-working day or a leave day is hatched all the way down.
  - A summary strip under the header shows the day's hours and breaks, a bar of planned time (orange for blocks, purple for meetings) with "3h 30m planned of 8h 15m" and what is still open, and an amber "1h outside working hours" when something is planned outside them. Overlapping items are counted once. Half-day leave halves the working time.
  - The strip also shows the week so far, for example "Week: 22h planned of 40h", using the hours of each day, so a short Friday counts as its own length.

### Changed
- Free time and the "+ Plan" slot in Plan Day are now found inside your working hours and skip lunch and other breaks (previously a fixed 8AM to 5PM). A day with no working hours still falls back to 8AM to 5PM.
- The timeline now widens to include your working hours, and any block or meeting planned outside the usual 7AM to 7PM window, so nothing is hidden.

---

## [0.56.0] — 2026-11-10

### Changed
- Planning a task into a day (Plan today, or a task from the suggestions in Plan Day) now always creates a 1-hour block, whatever the task's estimate is. The estimate belongs to the whole task, which can be worked over several sessions, so it no longer sets the block length (the block is shorter only if the free gap is less than an hour).
- Time spent on a task is now worked out from your planner. Every block linked to the task that has already happened (earlier days, or today up to the current time) counts as a session, rounded to quarter-hours. The task row shows it, for example "5h of ~8h", and the task panel shows "5h over 4 planned sessions · 3h left".
- When you tick a task done, the "how long did it take?" prompt now leads with that planned total (for example "5h") so one click confirms it, followed by the usual choices based on the estimate. A task with sessions but no estimate now asks too. The prompt is unchanged for tasks with no planned sessions, and the Took field in the task panel shows the planned total as a hint.
- To Do capacity counts the time left on a task (estimate minus time already spent) instead of its full estimate. A long task being worked across several days no longer fills the day it is due, in the day cards, the Today header and the calendar colours.

---

## [0.55.2] — 2026-11-10

### Fixed
- Dialogs (add event, quick task, leave, reminders, groups, import preview, Plan Day and others) no longer close when you press inside a text box, drag to select text, and let go outside the dialog. A drag that starts in one place and ends in another is no longer treated as a click on the dark background, and the same protection covers the small pop-up menus that close when you click outside them. A normal click on the background still closes a dialog.

---

## [0.55.1] — 2026-11-10

### Fixed
- The Export pop-up on a note sat hard against the right-hand edge of the screen. It now keeps a clear gap from the edge and the page scroll bar, and the link and text/highlight colour pop-ups do the same.

---

## [0.55.0] — 2026-11-10

### Removed
- The Outlook message (.msg) option has been removed from a note's Export menu. Export now offers Copy for email and PDF.

---

## [0.54.0] — 2026-11-10

### Added
- Export > Copy for email. Copies the note, formatting and all, with its photos shown in place at the bottom. Open a new message in Outlook (or any mail app) and paste with Ctrl+V; there are no files to attach or open, and you can edit the text before sending.

### Changed
- Outlook message (.msg): photos now appear in the body of the message instead of as separate attachments, sized to fit the page (up to 560 pixels wide).

### Fixed
- Outlook message (.msg): the subject and photo names could show as a single letter in the new Outlook. The file now declares that its text is Unicode, which Outlook needs in order to read it.

---

## [0.53.1] — 2026-11-10

### Fixed
- Outlook message (.msg) export: photos showed as blanks. They were being marked as hidden in the message, which is now corrected, and each photo also carries its size.
- Outlook message (.msg) export: lines in the note were spaced too far apart. The body now uses tight line spacing with no extra space between lines or list items, matching the note.
- PDF export: line spacing is slightly tighter and no longer adds extra space between lines.

---

## [0.53.0] — 2026-11-10

### Added
- Export a note as a PDF. Open a note, click Export and choose PDF: you get a single file with the note's formatting (bold, italic, underline, colours, highlights, links, bullet and numbered lists), its details (project, date, meeting, task, tags), the checklist with ticks, and the photos. It does not depend on Outlook, so it can be attached to any mail, dragged into a mail folder, or filed for reference. Characters the standard PDF fonts can't show (such as emoji) appear as a question mark.

### Changed
- The Email button on a note is now Export, which offers PDF or an Outlook message (.msg). The message file replaces the earlier .eml draft: it is an unsent email with the note as the text and the photos attached.

---

## [0.52.0] — 2026-11-10

### Added
- Email a note. Open a note and click Email (next to Pin and Duplicate) to save it as an unsent email draft. Open the downloaded file and it appears as a new message in Outlook (or your mail app) with the subject set to the note title and the note as the message: formatting, colours and links are kept, and the project, date, meeting, task, tags and checklist are listed. Any photos on the note are attached as picture files. Choose the recipients and send as usual. Nothing is sent automatically.

---

## [0.51.0] — 2026-11-10

### Added
- Settings > Working Hours. Set your working days and a start and end time for the whole week, with as many breaks as you need (lunch, tea breaks and so on). Tick "Set different hours for individual days" to give each day its own start, end and breaks, or mark a day as not working. The screen shows the working time left after breaks for each day and for the week. The default is Monday to Friday, 08:00 to 17:00 with a one-hour lunch (8 hours), so nothing changes until you edit it; if you had changed "Hours per leave day" before, that length is used as the starting point.
- To Do: each day's capacity now allows for meetings. Meeting time inside your working hours (overlapping meetings counted once, anything over a break ignored, all-day events ignored, and a meeting with no end time treated as one hour) is shown in purple at the start of the day's progress bar, and the tasks fill the rest. A day is flagged over capacity when its tasks no longer fit around the meetings, with a red end on the bar and red task text. The Today header reads, for example, "3h of 5.5h · 2.5h in meetings", and the calendar tooltips mention meetings too.

### Changed
- Log Time now always opens in hours, with the hrs / % toggle swapped so hrs is on the left. A new day starts in hours even if you used % on the previous one. Entries you saved in % still reopen in % so their figures are not changed. The "Working Hours" box defaults to that day's hours from your Working Hours settings.
- Leave booked from Settings or the leave panel uses that day's working hours (the "Hours per leave day" setting is now only used if a day has none). Overtime shown in the history also compares against that day's hours.
- To Do capacity follows your Working Hours, so a day you don't work (for example a weekend) counts as having no capacity.
- The Add button in the Notes and To Do input bars is smaller, leaving more space around it inside the bar.

---

## [0.50.0] — 2026-11-09

### Changed
- Highlight and text colour buttons in notes and project summaries now remember the last colour you used. Click the H or A button to apply that colour straight to the selected text; the small arrow beside it opens the palette to pick a different one (which then becomes the new default). The last colours are kept on this device between sessions.
- This Week: the buttons in a day's action panel (Log time, Add event, Add task, Reminder, Plan day, Log leave) are now the same width in both columns. "Add reminder" is shortened to "Reminder" so it still fits.

---

## [0.49.1] — 2026-11-09

### Changed
- Spellcheck now also switches on while you are typing in a project summary, and off again when you leave it.

---

## [0.49.0] — 2026-11-09

### Added
- Links in notes and project summaries. A new Link button (chain icon, or Ctrl+K) in the formatting bar turns the selected text into a link, or adds a link with its own text if nothing is selected. Click inside an existing link and use the same button to change its text or address, open it, or remove it. Addresses starting with www. or without https:// are fixed up for you, and email addresses become mail links. File and network-drive paths can't be linked (browsers block them), so the box suggests a SharePoint or OneDrive link instead.
- Paste an address to link it. Pasting a single web address over selected text links that text; pasting it on its own adds a clickable link. Anything else you paste is still plain text.
- Ctrl+click opens a link while you are editing (hovering shows the address and a reminder). In note cards and the project view a normal click opens it in a new tab.

### Changed
- Spellcheck now switches on while you are typing in a note's title or text and off when you leave, so the underlines don't clutter the board. Project summaries are unchanged.

---

## [0.48.0] — 2026-11-09

### Changed
- Plan Day: changes to an existing planned block now save as you make them. Picking a project or activity saves straight away, and the goal saves when you leave the field or press Enter. A small "Saved" tick confirms it. "Save changes" and "Cancel" are replaced by a single "Done" that closes the editor; Delete is unchanged. Anything you have typed is also kept if you click another block, change day or close the planner. New blocks still use "Add block", and a block can't be left without a project (clearing it puts the previous one back).
- This Week: collapsing Planned, Meetings, Notes or Tasks now applies to the one day you click, not every day. "Collapse details" / "Expand details" still folds or opens everything, but only for the week you are viewing. Each new week starts expanded, and choices older than about two months are forgotten automatically. Your earlier collapse setting (which applied to every day) is reset once.

---

## [0.47.0] — 2026-11-09

### Added
- Planner can now be installed as a desktop app. Open the hosted address in Edge or Chrome, install it (Settings > Desktop App shows an Install button, or use the browser's install icon), and it opens in its own window with its own taskbar icon that you can pin. It uses the same data as the browser, so nothing needs to be moved.
- Offline use: the app keeps a copy of itself on your computer and opens without an internet connection. When you are online it always loads the latest version first.
- Update notice: if a newer version has been published while Planner is open, a small bar offers "Reload now" or "Later", so an app left open for days does not stay out of date.
- Settings > Desktop App also shows whether the browser has marked your Planner data as protected from automatic clearing, how much storage Planner is using, and a "Protect my data" button if protection has not been granted yet.
- The window's title bar colour follows the light or dark theme.

### Removed
- An unused icon-font download from the internet that Planner was requesting on every start.

---

## [0.46.0] — 2026-11-09

### Changed
- This Week: each day now has a small chevron in its header, and clicking the heading opens an action panel inside the day card (Log time or Edit time, Add event, Add task, Add reminder, Plan day, Log leave or Edit leave) instead of a floating menu. The panel stays open until you click the heading again, pick an action, press Escape, or open another day, and it keeps its place when the calendar refreshes. The hover-only "+" button and the floating menu are removed.
- On narrower screens the panel adapts: labelled buttons in two columns, then one column, then one icon per row on a phone (the buttons keep their names for screen readers and tooltips). The heading can also be opened from the keyboard with Enter or Space.

---

## [0.45.1] — 2026-11-09

### Fixed
- To Do and Projects: the bullet that appears between the end and the start of a long subtask (or task title) while it scrolls on hover was showing as garbled characters (Â Â Â â€¢Â Â Â). It is now a clean bullet with even spacing, matching the Up Next pill.

---

## [0.45.0] — 2026-11-09

### Added
- This Week: the Planned, Meetings, Notes and Tasks labels in each day are now collapsible. Click a label to fold that list away on every day; a count shows how many items are hidden, and clicking again opens it. A "Collapse details" / "Expand details" link beside the weekly reminder line folds or opens all four at once. The day cards also shrink to fit their contents when anything is collapsed, saving vertical space. Your choice is remembered on that device and is not synced.
- To Do and Projects: when you hover a task title or a subtask in the task details panel that is too long to fit, the text now scrolls across in a loop, like the Up Next pill. It stops when you click to edit.

### Changed
- This Week: clicking a day's heading now opens the quick-actions menu in exactly the same place as the "+" button does.
- To Do and Notes: the add bars are now 36px tall (up from 30px in the last version, down from 52px originally).

---

## [0.44.0] — 2026-11-09

### Added
- This Week: a "+" button now appears in the corner of a day when you hover over it, as a reminder that clicking the day opens its quick actions. It fills in orange when you point at it.

### Changed
- To Do and Notes: the add bars are about 40% shorter (52px down to 30px), with a smaller Add button, so they sit more neatly on the page. They work exactly as before.

---

## [0.43.0] — 2026-11-09

### Added
- Calendar import: drag one or more .ics files onto any page, or copy an invite file and press Ctrl+V (pasting the invite text works too), to import meetings. The Import .ics files button in Settings now accepts several files at once.
- Import preview: before anything is added you see each meeting or repeating series with a New, Update, Already imported or Remove tag. You can untick items, pick a project per item (suggested when the title contains a project name or code), set a project for everything selected, and choose whether to include past occurrences. Dropping several files in one go is merged, using the highest version of each meeting.
- Undo: a toast after importing lets you undo the whole import, including removed meetings and their reminders.
- Dropping a file that is not a calendar now shows a message instead of opening the file in the browser tab.

### Changed
- Repeating meetings (daily, weekly, monthly, yearly, with intervals, weekday lists, "2nd Tuesday" style rules, end dates, counts, excluded dates and extra dates) are now expanded into individual meetings for the next 12 months, starting from last week. Previously only the first meeting came in.
- Moved occurrences of a repeating meeting are applied, and cancelled occurrences are left out.
- Time zones are converted to your time (Johannesburg), including Outlook's Windows zone names and daylight saving: a 09:00 Berlin meeting shows as 09:00 or 10:00 depending on the date. If a zone is not recognised the import says so and treats the time as yours.
- Cancellations (organiser cancellation emails, or cancelled occurrences) now offer to remove the matching meetings you imported earlier.
- Multi-day meetings and all-day events are split into one entry per day, labelled "(day 2/3)".
- Meetings you imported with the older importer are recognised and updated rather than duplicated.

### Fixed
- Imports no longer pick up the text of the reminder alarm inside an invite as the meeting description.
- Invites whose time zone name contains a colon are now read correctly.

---

## [0.42.1] — 2026-11-09

### Fixed
- This Week, Last Week & Follow Ups: the auto-fill (↺) listed any project with no timesheet hours as a "New project", so a project you added weeks ago was reported as new every week. Projects now record the date they were added, and only projects added during last week are listed. Projects added before this version have no date and will not be listed as new again.
- Last Week & Follow Ups: completed high-priority tasks finished in the first two hours after midnight on a Monday were counted in the wrong week because the date was read in UTC rather than your local time.

---

## [0.42.0] — 2026-11-06

### Changed
- Week picker: the calendar dropdown now opens in the same spot, at the same width and with the same styling as the Up Next and Reminders dropdowns (right-aligned under the header) instead of dropping from the week badge. Only one of the three is open at a time.
- Tidier calendar header: the month name sits on the left with a compact Today button and the previous/next arrows on the right, and the day numbers are slightly larger.

---

## [0.41.0] — 2026-11-06

### Changed
- Settings: the sections (Appearance, Import Calendar, Activity List, Backup & Sync, Leave, Reminders, To Do) are now listed in a permanent sidebar. Click one to show its settings on the right. The last section you opened is remembered on that device and is not synced.
- On narrow screens the sidebar becomes a swipeable strip of tabs above the settings.
- The section minimise/expand feature is removed, along with the chevrons on the section titles. The Public holidays list inside Leave can still be expanded.
- The app tour's Settings steps now describe the sidebar and open the Leave section when pointing at it.

---

## [0.40.0] — 2026-11-06

### Changed
- This Week: clicking a day's heading (e.g. Wednesday) now opens that day's quick-actions menu (log or edit time, add event, task or reminder, plan day, log leave) instead of jumping straight to the Timesheet. The menu no longer opens on hover and stays open until you pick an action, click elsewhere, press Escape or scroll. "Log time" in the menu still takes you to the Timesheet for that day.
- The tour text for the weekly calendar now says to click a day's heading rather than hover.

### Fixed
- Header bar: page content no longer shows through the rounded top corners when scrolling. The cover strip above the bar now also fills the two corner gaps.

---

## [0.39.0] — 2026-11-06

### Added
- Note editor: a show/hide button beside the close button hides the details column (project, task, date, tags, colour, photos) so the writing area uses the full width. The choice is remembered on that device and is not synced to your other devices.
- Strikethrough button in the formatting bar for notes and project summaries (works with bold, colours and lists).

---

## [0.38.0] — 2026-11-05

### Added
- Photos on notes: add photos from the note's editor (under the "Added" line), or paste an image straight into a note. Click a thumbnail to view it full size with next/previous. Notes show a photo count on the card and in the project page list.
- Note photos use the same storage and photo backup folder as project photos, so they are backed up and restored the same way. Deleting a note deletes its photos (and removes them from the backup folder); duplicating a note copies them. A note that only holds photos is no longer cleared as "empty".

### Changed
- Checklist tick-boxes on notes use the input-box colour so they stand out on coloured and dark cards.
- Task and note entry fields: in dark mode the inner field now has rounded corners and more padding around the placeholder.

### Fixed
- The cover strip above the sticky header was 1px short on each side, so the outer edge of note cards showed above the header bar when scrolling.

---

## [0.37.0] — 2026-11-05

### Added
- Sub-bullets and sub-numbering in notes and project summaries: press Tab / Shift+Tab inside a list item, or use the new indent / outdent toolbar buttons. Up to four levels; nested numbered lists use a, b, c then i, ii, iii.

### Changed
- Bullets and numbers now take the colour of the text on their line (first coloured text of the item). Existing coloured lists pick this up automatically the next time they display.

---

## [0.36.1] — 2026-11-05

### Fixed
- Typing in a note opened on a project page dropped the cursor after the first keystroke. The open editor was being re-rendered on every input; it is now left untouched while you type (the Notes tab was not affected).

---

## [0.36.0] — 2026-11-05

### Added
- **Highlight and text colour palettes** in the rich text fields of notes and project summaries — the single highlight button is now two buttons, H (highlight) and A (text colour), each opening a small popover of six colours (yellow, green, blue, pink, orange, purple for highlights; red, orange, green, blue, purple, grey for text) plus a "none" swatch that removes it. The bar under each button remembers the last colour used. Esc, clicking elsewhere or scrolling closes the popover
- Highlights get dark text automatically so they stay readable in dark mode, and the text colours are mid-tones that read on both light and dark backgrounds

### Fixed
- **Project summaries are now cleaned on save and on display**, the same way notes are — previously they stored whatever the browser produced, including any scripts or images pasted in or arriving through an imported backup. Text colours and highlights are kept, anything unsafe is removed
- Note cards no longer force every highlight to yellow; they show the colour you picked

---

## [0.35.3] — 2026-11-04

### Fixed
- **"Planner" is back in the header on medium widths** — it had been hidden between about 920 and 1180px wide to make room for the six tabs, which is no longer needed now the tab bar stays centred and the Up Next pill shrinks. The title shows at every width above 560px as before, and the tabs stay centred and clear of it

---

## [0.35.2] — 2026-11-03

### Fixed
- **Header tabs stay centred** — between roughly 920 and 1180px wide, a long Up Next meeting title pushed the right side out and shifted the tab bar left of centre (by up to about 100px). The Up Next pill now shrinks with an ellipsis to fit its half of the header, so the tabs stay dead centre and the right side no longer slides under them. On phones and narrow windows the tabs now sit in the middle of the space between the logo and the right-hand buttons, instead of hugging the left edge once the logo hides

---

## [0.35.1] — 2026-11-03

### Changed
- **Calendar months sit side by side on narrow screens** — when the calendar drops below the tasks (920px and narrower, on both To Do and Projects), the two months now share a row with a small gap instead of stacking, with the legend and leave balance beneath, centred up to 540px wide. Day blocks are smaller there (about 24 x 21px on a phone, 36 x 32px on a tablet). On wide screens the side column still stacks the months at the same size as before

---

## [0.35.0] — 2026-11-03

### Changed
- **The calendar now lives on the Projects tab too** — the right column of a project page always shows the same Calendar as To Do (two months, leave and holidays, load shading, leave balance, hide/show, month arrows). Selecting a task swaps it for the task panel in the same spot and Esc (or the x) brings the calendar back, so the project no longer shifts width as panels open and close. Opening a note also returns the column to the calendar
- **Drag a task onto a calendar day** from the Projects tab to set its due date — task rows there are draggable again now there is somewhere to drop them. Clicking a day on this tab does nothing, since the day filter belongs to To Do
- **Layout** — wide screens show project list | project | calendar. Between about 920 and 1180px the project list is always behind the "Projects" button (slide-out); below 920px the calendar drops under the project as a collapsed section, as on To Do, and the task panel opens as a bottom sheet

---

## [0.34.0] — 2026-11-03

### Changed
- **Notes on the Projects tab now open in place too** — clicking a note in a project's Notes card expands that note right there in the card, using the same stacked editor as the narrow Notes tab layout (writing area first, then checklist, project, task, date, meeting, tags, colour and Done below), at any screen width. The side panel is no longer used for notes, so the project list stays put and the task panel is only for tasks. Opening a note closes any open task panel, and opening a note in a collapsed Notes card expands the card
- Done, the x, Esc, or opening another note collapses it again; moving a note to another project from its editor, switching project or deleting it closes the editor

---

## [0.33.4] — 2026-11-03

### Fixed
- **Highlights are no longer lost when a note is saved** — highlighting text that was already bold, italic or underlined made the browser put the highlight colour on that formatting tag rather than a plain span, and the note-cleaning step only kept it on spans, so the highlight vanished when the note saved and closed. It is now kept on any formatting tag. Highlights lost before this update cannot be recovered; bold, italic, underline and lists were saving correctly

---

## [0.33.3] — 2026-11-03

### Changed
- **Shorter prompt in the Notes entry bar** — it now reads "Jot a note - try @Project #tag" so it no longer cuts off on narrow screens. The blank-note tip is gone from the bar; pressing Add with nothing typed still opens a blank note

---

## [0.33.2] — 2026-11-03

### Fixed
- **Matching heights on the filter rows** — on the Notes tab the search box (about 30px), project dropdown (about 25px) and tag chips (20px) are now all 28px tall and line up. The To Do view row (Urgency / Project / Due Date / Priority pills at about 20px and the group dropdown at about 25px) is now 28px across too

---

## [0.33.1] — 2026-11-03

### Changed
- **More room around the Add button** on the To Do and Notes entry bars — the button was sitting about 6px from the right edge. It now has an even 10px gap on the right, top and bottom and is slightly wider (about 61 x 34px), so the bar feels less tight

---

## [0.33.0] — 2026-11-03

### Changed
- **Notes now open on the note itself** — on the Notes tab, clicking a card expands it in place into the editor instead of filling a side panel. The writing area (formatting toolbar, text and checklist) takes the left of the open note, with project, task, date, meeting, tags and colour on the right and Done / Pin / Duplicate / Delete beneath. On narrow screens it stacks into one column with no slide-up sheet. Opening another note, pressing Done, the x or Esc collapses it back to a card; an empty untitled note is discarded when you close it
- The Projects tab still uses the side panel for notes, next to the project list, as before

---

## [0.32.2] — 2026-11-02

### Fixed
- **Long project names no longer spill out of notes on small screens** — the project name on a note card now truncates with an ellipsis (hover shows the full name), as do long tags. The project filter dropdown above the board is also capped to the screen width instead of stretching to fit its longest project name

---

## [0.32.1] — 2026-11-02

### Changed
- **Bottom-sheet edit panel is inset on narrow screens** — the task and note edit panel that slides up on narrow screens now floats 12px in from the left, right and bottom edges with rounded corners all round, instead of running edge to edge

---

## [0.32.0] — 2026-11-02

### Added
- **Notes tab** — a board for pinning ideas and working notes, between Projects and Settings. Notes show as cards in a grid. Type a note in the bar at the top and press Enter (add `@Project` to link it and `#tags` to tag it), or press Add on its own for a blank note. Click a card to open it in the side panel (bottom sheet on narrow screens)
- **Rich notes with a checklist** — each note has a title, formatted text (bold, italic, underline, highlight, bullet and numbered lists) and a tick-box checklist. Ticking items works straight from the card. Pasted text is stripped to plain text
- **Drag to arrange** — drag a card to reorder it, with a marker showing where it will land. Pin a note to keep it in a Pinned row at the top (also the way to move a note to the top on a touch screen)
- **Colour and tags** — seven card colours, free tags, and a filter bar with search, project dropdown and tag chips
- **Link notes to projects** — a Notes card on every project page lists that project's notes. Click one to open it in the same side panel there, or use + Add to start one for that project. Renaming a project updates its notes
- **Link notes to a date or meeting** — pick a date (and a meeting from that day) and the note appears under Notes on that day in This Week; click it to open the note
- **Link notes to tasks** — attach a note to a task and it shows under Linked notes in the task panel, with + Note to start one. Any checklist line can be turned into a task with + Task
- Notes are saved with your backup and sync file like everything else

### Changed
- **Header tabs fit with six tabs** — slightly tighter tab spacing between 920 and 1180px wide, and on phones the logo hides and the Up Next pill truncates so all six tabs stay visible

---

## [0.31.1] — 2026-11-02

### Changed
- **Quick add inside a project now uses the smart input** — type things like `Draft memo fri !high ~2h`, `!today`, `waiting on Sam` or `tomorrow` into the "Quick add" box at the bottom of a project and the date, priority, estimate, Today flag and waiting-on are picked up, with a live "Understood:" line under the box. The task goes into that project unless you type `@OtherProject`. Same behaviour on the To Do tab's project, due date and priority views

### Fixed
- **Project list can be opened with the task panel open** — between about 920px and 1180px wide the project list is tucked away while a task is open, but there was no way to bring it back. A "Projects" button now shows above the project and opens the list as a slide-out; tap the dimmed area or pick a project to close it

---

## [0.31.0] — 2026-11-02

### Changed
- **Projects tab tasks now match the To Do tab** — task rows inside a project use the same compact layout: click-to-edit due date and estimate, priority tap, the Today menu, and small subtask and note icons. The old row of Edit / Wait / Remind / Sub / Note / Delete buttons is gone
- **Task detail side panel in Projects** — click a task to open the same panel as To Do (title, project, priority, due, estimate, Today list, waiting on, subtasks, notes, Remind / Plan today / Park / Delete) on the right of the project view. Changes show in the task list straight away. Esc or the x closes it
- **Layout** — on wide screens it is project list | tasks | detail. Below about 1180px the project list tucks away while a task is open (close the panel to bring it back), and below 920px the panel opens as a bottom sheet, same as To Do
- Moving a task to another project from the panel closes the panel, since the task has left the project you are viewing. Switching project or tab also clears the selection
- Rows in Projects are no longer draggable (there is no calendar to drop them on there)

---

## [0.30.4] — 2026-11-02

### Fixed
- **Calendar / task detail panel top now lines up with the task count blocks** — the right column was sticking 8px lower than the "open / done" blocks on the left once the task list was long enough to scroll. It now starts level with them and still stays pinned just under the header as you scroll

---

## [0.30.3] — 2026-11-02

### Changed
- **Calendar centred on narrow screens** — when the calendar sits below the tasks, the months, legend and leave balance are now centred in the card instead of hugging the left edge. Width is unchanged (still capped at 340px)

---

## [0.30.2] — 2026-11-02

### Changed
- **"Outlook" panel is now "Calendar" and matches the task sections** — same header style as Overdue / This week / Later (chevron, bold title, tap to collapse), with the month arrows and Today button on the right of the header. Looks consistent in the side column and when it drops below the tasks on narrow screens
- **Calendar months no longer balloon on narrow screens** — when the calendar sits below the tasks, the month grid is capped at 340px wide so day blocks stay about 47 x 42px instead of stretching with the window

---

## [0.30.1] — 2026-11-02

### Fixed
- **To Do spacing outside Urgency view** — with the Week strip hidden (Project, Due Date and Priority views), the view buttons sat tight against the Add task bar. They now keep the same 12px gap as in Urgency view

---

## [0.30.0] — 2026-11-02

### Added
- **Open task limit is now a setting** — new To Do card in Settings with "Keep my open tasks to" (default 20, 1 to 500). The meter on the To Do tab uses your number: amber from about 85% of it, red once you pass it, with the message updating to match. It is a guide, not a hard stop, and Someday and finished tasks still don't count. The setting is saved with your backup and sync file

---

## [0.29.3] — 2026-11-02

### Changed
- **Task detail panel footer tidied** — Mark done (or Reopen) is now a full-width button on its own row, with Remind, Plan today, Park and Delete evenly spaced in a single row beneath it, instead of Mark done wrapping awkwardly to the right

---

## [0.29.2] — 2026-11-02

### Changed
- **Outlook calendar day blocks are taller** — now close to square (about 40 x 36px, previously about 40 x 22px) with the number centred, so the calendars are easier to read and click. The column scrolls on short screens

---

## [0.29.1] — 2026-11-02

### Fixed
- **To Do tab now fills the page width on wide screens** instead of sitting left-aligned with an empty strip on the right. The task list and side column line up with the header edges, and the side column is slightly wider (320px)

---

## [0.29.0] — 2026-11-02

### Added
- **Outlook calendars are back on the To Do tab** — two months stacked in the right column, with arrows and a Today button to move through them. Leave and public holidays are green, days shaded amber when busy and red when over your day length (from task estimates). Click a day to filter the list to it, or drop a task on a day to reschedule. Your leave balance (and balance after booked leave) sits underneath with a Book leave link. The card can be collapsed
- **Task detail panel** — click any task to open its details in the same right column (a slide-up sheet on phones). Edit the title, project, priority, due date, estimate, Today list (Off / Today / Keep), who you are waiting on and the chase date. Subtasks have checkboxes, a progress bar, rename and remove; notes are a full text box. Remind, Plan today, Park, Delete and Mark done are at the bottom. Changes save as you make them; Esc or × closes the panel and brings the calendars back
- Completed tasks show a Took field in the panel so you can correct how long they actually took

### Changed
- **Task rows are cleaner** — hover now shows just the Today star. Subtasks and notes are shown as a small progress chip (e.g. 1/3) and a note icon instead of expanding inline; open the panel to see or edit them
- The selected task is highlighted in the list

---

## [0.28.0] — 2026-11-02

### Added
- **To Do tab rebuilt around "what's due and what do I do today"**
  - **Smart add box** — type a task in plain words, e.g. `Send RFI response @TenderX fri !high ~2h`. Chips show what was understood (project, due date, priority, estimate) and each can be dismissed with ×. `@` picks a project (partial names work), `!high` / `!med` / `!low` sets priority, `~2h` or `~45m` sets an estimate, `!today` / `!keep` / `!someday` set the Today behaviour
  - **Urgency view (new default)** — sections for Overdue, Today, Waiting on, This week, Later, Someday and Completed. Sections collapse and remember their state. The old Project, Due Date and Priority views are still one click away
  - **Today list** — mark any task with the Today star to do it today only (it returns to its due-date section overnight), or choose Keep on Today until done to persist it. Tasks due today appear automatically
  - **Week strip** replaces the month calendars — the next five working days with task counts and estimated hours against your day length (leave and public holidays shown in green, overloaded days in red). Click a day to filter the list; drag a task onto a day to change its due date
  - **Estimates** — click + est on any task (or use ~ in the add box, or the Edit window). Today and the week strip add them up. Planning a task into the Day Plan now sizes the block to its estimate
  - **Actual time** — ticking off a task that has an estimate offers a quick "how long did it take?" so you build a feel for your estimates; the Completed section shows est vs took and a running summary of how your estimates compare
  - **Waiting on** — mark a task as waiting on someone with a chase date. It sits in its own section, and on the chase date it moves to Today and a reminder fires. Mark it received to clear it
  - **Soft limit of 20** — a meter shows open tasks (Someday not counted) and nudges you when the list gets long
  - Quick edit: click a due date, estimate or priority on any task to change it in place
  - Edit Task window gains Estimate, Today list, Waiting on and Chase on fields
- Up Next suggestions put Today-list tasks and due chases first, and skip Someday and still-waiting tasks

### Changed
- The two month calendars on the To Do tab are removed (the week pill in the header still opens a month calendar)
- Task rows on every view (including a project's Tasks card) now share the same layout, with the project shown as a coloured dot

---

## [0.27.0] — 2026-10-28

### Added
- **Import from .ics file in the Add Meeting window** (also reached from + Meeting in the Day Plan) — a file with one event fills in the form so you can check it, assign a project and Save; a file with several events imports them all straight away and tells you how many were added or updated. Re-importing the same event updates it rather than duplicating it

### Changed
- **Meeting notes in This Week are limited to 4 lines** — long invite text (e.g. Teams join details) no longer stretches the day card. Hover a meeting to see its full title and notes; click it to read or edit them in full

---

## [0.26.3] — 2026-10-28

### Changed
- **The header Up Next pill is narrower** (max width 300px to 210px) — longer text scrolls on hover, looping continuously
- **The Up Next dropdown card is back to its original 320px width** (it was narrowed in 0.26.2 by mistake)

---

## [0.26.2] — 2026-10-28

### Changed
- **Hover-scroll now loops continuously** — long names keep scrolling, with a dot separator before the text repeats, for as long as the pointer stays on them (previously one pass then stop)
- **Up Next and reminders cards are narrower** (320px to 264px)

---

## [0.26.1] — 2026-10-28

### Changed
- **The To Do list button in the Up Next dropdown is left-aligned**, with Open day plan on the right — matching how + Reminder and Manage sit in the reminders dropdown

---

## [0.26.0] — 2026-10-28

### Changed
- **Reminders have their own dropdown on the bell** — Up Next now shows only what's on now and next, plus suggested tasks. Click the bell for reminders: "Due now" (tick to finish, Snooze menu), "Later today" for timed ones that haven't reached their time, and + Reminder and Manage buttons. Opening one closes the other, and the bell's red badge still counts what's due
- **The Up Next card is a fixed, compact width** (320px, never wider than the screen), and long names are cut off with an ellipsis on a single line instead of wrapping — tags like Meeting and Reminder stay visible beside them

### Added
- **Long names scroll when you hover over them** — pause on a cut-off name (in either dropdown, or on the Up Next pill itself) and it slides across to show the rest, then snaps back when you move away

---

## [0.25.1] — 2026-10-27

### Changed
- **The header stays on one row on phones** — at 560px wide and below, the "Planner" text is dropped (the logo stays) and the header's spacing is tightened, so the logo, tabs, week number, bell and Up Next all fit on a single row instead of wrapping to two. Checked down to 375px wide
- **The week number pill now shows on every tab** — not just This Week. Picking a week (or Today) from another tab takes you to This Week showing it

---

## [0.25.0] — 2026-10-27

### Changed
- **Up Next and the reminders bell now show on This Week too** — they sit in the top right of every tab
- **Week arrows moved onto the planner** — a ‹ on the left and a › on the right of the Monday to Friday days change week, so the top bar no longer carries them
- **Week picker is a compact week-number pill** in the top bar, to the left of the bell (This Week only). It opens the same calendar dropdown as before, and hovering it shows the full dates of the week
- The guided tour's This Week and Up Next steps describe the new layout

---

## [0.24.1] — 2026-10-26

### Changed
- **The Up Next pill is the same height as the reminders bell** — both are now 28px, in line with the other controls in the header bar

---

## [0.24.0] — 2026-10-26

### Changed
- **The reminders panel on the To Do tab is gone** — along with the reminders chip in its summary row. Everything it did now lives in the bell and Up Next dropdown, the Manage window, and Settings. Existing reminders carry over untouched

### Added
- **Reminders can have a time of day.** A timed reminder stays quiet until its time. Before then it sits in the Up Next list in order between your blocks and meetings (and can be the pill's "next" item), and on the day plan it shows as a small bell marker on the timeline; click a marker to edit it
- **Browser notifications (optional)** — Settings > Reminders. A notification pops up at a reminder's time, once, while the app is open in a browser tab. Off by default; it asks the browser for permission when you switch it on
- **Remind me about a task** — every task has a Remind button: on the due date at 9AM, the day before, tomorrow at 9AM, or any date and time you pick. Linked reminders disappear when the task is completed, and clicking one takes you to the task
- **Reminders can link to a project** (pick it in the editor) and meeting reminders now link back to the meeting; clicking either opens it
- **Smarter built-in reminders** — "Log your hours" now nudges at 4:30PM (not all day) and stops once hours are logged; a Friday 3PM "Submit your timesheet" reminder shows how many days this week still aren't logged; and an optional Monday "Leave balance is low" warning with a threshold you set. Each can be turned off, or have its time changed, in Settings > Reminders
- **Plain-language reminders** — in the new reminder editor, type things like "every Friday 3pm submit timesheet", "tomorrow 9am call Pieter", "monthly on the 25th pay invoices", "in 2 hours stretch" or "every mon, wed and fri 10am stand-up". It shows what it understood as you type, and fills in the repeat, day and time for you. Repeat options: once, daily, weekdays, weekly on chosen days, monthly on a day
- **Manage reminders** — a window listing every reminder grouped as Repeating, One-off, Meetings and Built-in, with Edit and Remove. Open it from Manage in the Up Next dropdown, or from Settings > Reminders. The To Do tab's recurring and long-term reminders are now created here

### Fixed
- Reminders set via **+ Reminder** and **Add reminder** now use the same editor (so they can be timed and repeating)

---

## [0.23.0] — 2026-10-22

### Added
- **Reminders live in Up Next** — a bell with a red count badge now sits beside the Up Next pill on every tab outside This Week. Click it (or the pill) and the dropdown has a Reminders section listing everything due today, each with a tick to mark it done and a Snooze menu. When nothing is scheduled, the pill itself reads "2 reminders due"
- **+ Reminder** — a quick-add button in the Up Next footer and a new "Add reminder" entry in the day hover list. Both open a small form (what, and which day); a reminder for today shows up straight away, a future one when its day arrives
- **Smarter snooze** — Later today (+1 hour), This afternoon (3PM, offered before 3PM), Tomorrow (8AM), Next Monday (8AM), or Pick a time for any date and time. The reminder returns at exactly that moment (the banner and bell refresh every 30 seconds). Existing one-day snoozes keep working
- **Done is recorded separately from dismissing** — marking a recurring reminder done saves the date, ready for streaks and history later. One-off reminders are removed when done

### Changed
- The reminder banner on This Week now has **Snooze ▾** (the same menu) and **Done** instead of Snooze and Dismiss
- The guided tour's Up Next step mentions reminders

---

## [0.22.2] — 2026-10-22

### Fixed
- **The day quick-action list opens instantly on hover** — it had a deliberate 140ms pause before appearing (meant to stop it flashing as the mouse sweeps across the week), which felt laggy compared with the old buttons. It now opens the moment you hover a day header and switches straight to the next day as you move across; it still waits briefly before closing so you can move onto the list

---

## [0.22.1] — 2026-10-22

### Fixed
- **Meeting reminders stay in sync when a meeting is moved or resized in the day plan** — the reminder's wording ("Meeting: Design review at 14:30") is rewritten with the new start time, and the reminder banner, the To Do summary and the reminders list refresh straight away. Meetings without a reminder are left alone, and deleting a meeting removes its reminder

---

## [0.22.0] — 2026-10-22

### Added
- **Meetings can be dragged and resized in the day plan, like planned blocks** — drag a meeting up or down to move it, or drag its top or bottom edge to change its length (15-minute steps). Times are saved to the meeting as you let go, and its reminder follows the new start time. Click a meeting to select it; a panel below the timeline shows Delete, Close and Edit details
- **Type to search in the project and activity pickers** — the block editor and the meeting form now use search boxes instead of plain dropdowns. Click to see the full list, or start typing to narrow it (words can be in any order); use the arrow keys and Enter to pick, Tab to accept the highlighted match, or Escape to close the list. Text that doesn't match anything snaps back to your last valid choice
- **Delete key removes the selected item** — select a planned block or a meeting in the day plan and press Delete (or Backspace) to remove it. Meetings ask for confirmation first. It never fires while you're typing in a field

---

## [0.21.3] — 2026-10-22

### Changed
- **Day quick actions open on hover, with no + Add button** — hover a day's header on This Week and the icon list appears just below it: Log time, Add event, Add task, Plan day, Log leave (Edit time and Edit leave on days that already have them). It opens after a very short pause, stays open while your mouse is over the day or the list, and closes when you move away, click elsewhere, press Escape, or scroll. Clicking the header itself still opens the day in the timesheet
- **Touch screens and keyboard:** with no hover available, a small + in the corner of the day header opens the same list on tap. Keyboard users can Tab to that + and press Enter, then use the arrow keys
- This replaces the pill-style list from 0.21.2

---

## [0.21.2] — 2026-10-22

### Changed
- **The + Add list uses the original button look** — the list that opens from + Add now shows the small coloured pills from before (+ Log in orange, + Event in purple, + Task and + Leave in green, + Plan in grey), stacked in a floating card. Log reads "Edit time" on days with time logged and Leave reads "Edit leave" on leave days. Behaviour is unchanged: click outside or press Escape to close, arrow keys to move through it

---

## [0.21.1] — 2026-10-21

### Changed
- **Day card quick actions are a single + Add button with a list** — the radial wheel from 0.21.0 has been replaced. Each day shows a small + Add button; click it for a short list: Log time, Add event, Add task, Plan day, Log leave, each with a coloured icon. Log time reads "Edit time" on days that already have time logged, and Log leave reads "Edit leave" on leave days. Click outside or press Escape to close, and use the arrow keys to move through the list. The list is easy to extend as more actions are added

---

## [0.21.0] — 2026-10-21

### Changed
- **Quick actions on the day cards are now a radial wheel** — the row of + Log, + Event, + Task, + Plan and + Leave buttons is replaced by a single + on each day. Click it and a wheel opens with the five actions around it (Log time, Add event, Add task, Plan day, Log leave). Choose one by clicking it, by pointing in its direction and clicking anywhere in the wheel, or by pressing the + and dragging towards an option and letting go. Click the centre or outside to close, press Escape to cancel, or use the arrow keys and Enter. The wheel stays on screen near edges, and the Log option reads "Edit time" on days that already have time logged
- The guided tour's This Week step now describes the wheel

---

## [0.20.1] — 2026-10-20

### Changed
- **Drag-to-reorder grips only show on hover** — the ⋮⋮ handle on project rows (Timesheet tab) and on links (Projects tab) is hidden until you hover over the row, then fades in. It keeps its space so rows don't shift, stays visible while you're dragging, and is always shown on touch screens where there's no hover

---

## [0.20.0] — 2026-10-16

### Added
- **Drag to reorder project links** — on the Projects tab, each link in Links and Resources has the same grip handle as the project rows on the Timesheet tab. Drag it up or down and a line shows where it will land. The order is saved with the project, and Edit and Delete still act on the right link afterwards

### Changed
- **Backup and Sync are one card in Settings** — Backup & Sync, with the export and restore buttons first and the sync folders underneath

### Fixed
- **A hairline of page content showed above the header while scrolling** — the cover strip started 1px too low, leaving the very top row of the screen uncovered. It now reaches the top edge

---

## [0.19.6] — 2026-10-15

### Added
- **Meetings carry a purple Meeting tag in the day plan** — the same tag Up Next uses, shown beside the meeting title so meetings stand apart from planned blocks at a glance. Long titles are shortened to keep the tag visible; in the narrowest overlap columns it's hidden to save space

---

## [0.19.5] — 2026-10-15

### Fixed
- **Short blocks and meetings in the day plan are no longer cut off** — 30-minute items now spread across a single row (title, goal or project, and time side by side), and 45-minute to 1-hour items use two rows (title and time, then goal). Taller items look the same as before

---

## [0.19.4] — 2026-10-14

### Changed
- **The guided tour covers everything added recently** — it's now 12 steps. Updated: This Week (the + Leave button and green leave and holiday days), Plan your day (resizing, overlapping blocks side by side, the Up Next panel and + Plan suggestions), Log Time (the leave line and balance chip), To Do (leave on the month calendars), Projects (flipping through photos), and Settings (two collapsible columns). New: Up Next in the header, Log History (List and Week views, CSV export with project codes), and Leave settings

---

## [0.19.3] — 2026-10-14

### Fixed
- **Header no longer shifts at the start of a scroll** — it sat 12px from the top but locked in at 8px, so it slid up 4px when you first scrolled. It now locks exactly where it sits, so only the page content moves

---

## [0.19.2] — 2026-10-14

### Changed
- **Settings section titles no longer have icons** — they're plain text now, to match the rest of the app
- **Up Next dropdown has a single line above its buttons** — the last suggested task's underline and the line above the To Do list / Open day plan buttons were doubling up; only one remains
- **Nothing shows above the header bar when you scroll** — the small gap above the sticky header used to let page content peek through; it's now filled so the page only shows from the header downwards

---

## [0.19.1] — 2026-10-14

### Changed
- **Sync section has an icon** — it was the only Settings section without one, which pushed its title out of line with the others

---

## [0.19.0] — 2026-10-14

### Changed
- **Settings is now two columns, with collapsible sections** — Appearance, Import Calendar, Activity List and Backup sit on the left, and Leave and Sync on the right, each in its own card. Click a section's title (or press Enter or Space on it) to minimise or expand it; the app remembers which ones you've closed. Below 900px wide the columns stack into one
- The Leave section's Public holidays list is its own collapsible part inside it, closed by default. Opening Leave settings from the leave chip on the Timesheet tab expands the section if it was minimised

---

## [0.18.5] — 2026-10-14

### Fixed
- **Week picker position stuck after resizing** — if the calendar was open (or the window was resized and the calendar opened again straight after), it kept the position it was given at the old screen width. It now re-aligns whenever the window width changes, between the centred layout on wide screens and the right-aligned one on narrow screens

---

## [0.18.4] — 2026-10-14

### Changed
- **Week picker dropdown lines up with the week pill on narrow screens** — at 920px wide and below, the calendar that opens from the week pill on This Week now has its right edge aligned with the pill, the same as the Up Next dropdown, and is kept inside the screen. On wider screens it stays centred under the pill

---

## [0.18.3] — 2026-10-14

### Changed
- **Up Next dropdown back to its original position** — it opens under the pill with its right edge lined up with the pill again, and the pointer and narrow-screen centring from 0.18.1 and 0.18.2 are removed. The compact pill on narrow screens stays

---

## [0.18.2] — 2026-10-14

### Changed
- **Up Next card is centred on narrow screens** — at 920px wide and below, the dropdown sits centred on the page with equal side margins, and its pointer still lines up under the pill. On wider screens it stays under the pill

---

## [0.18.1] — 2026-10-14

### Changed
- **Up Next pill is compact on narrow screens** — like the week pill on This Week, it shrinks to the status dot plus a short label ("5 min", "Now", "1PM", "Task") below 920px wide. The full title is still in the dropdown
- **Up Next dropdown lines up with the pill** — the card is now centred under the pill as far as the screen edge allows, and a small pointer on the card's top edge sits directly under the pill

---

## [0.18.0] — 2026-10-13

### Added
- **Up Next in the header** — on every tab except This Week, the week indicator in the top right is replaced by an Up Next pill showing what's current or coming, e.g. "Design review in 25 min", "Now: Tender A · until 11AM", or the next task when nothing is scheduled. It looks ahead to tomorrow and the days after once today is finished, and shows "Day off" on leave days. Click it for Now, Next, and Suggested tasks; click a block or meeting to open it in the day plan. Updates every 30 seconds. On This Week the week arrows and picker are back as before
- **Up Next panel in the Day Plan** — a side panel beside the timeline lists what's current and coming up, the free time left in the working day (8AM to 5PM, from now when viewing today), and suggested tasks ranked by overdue, due today, due soon, and priority. "+ Plan" drops a block for the task into the next free slot, using the task's project and title as the goal (if the task has no active project, the new-block form opens pre-filled so you can choose one). Tasks already planned that day drop off the suggestions. On narrow screens the panel sits under the timeline

### Changed
- **Overlapping plan items now sit side by side** — blocks and meetings that overlap in time share the width in separate columns instead of covering each other, so each can be clicked, dragged, or resized on its own. The day plan window is wider to fit the side panel

---

## [0.17.2] — 2026-10-13

### Fixed
- **Log History List/Week toggle out of sync** — the app remembers whether you last used List or Week view, but after reopening, the buttons always showed List as selected even when the Week view was displayed. The buttons now always match the view shown

---

## [0.17.1] — 2026-10-13

### Added
- **Project / Tender Codes in exports** — the By Week (Replicon) export now has a Code column next to Project, filled from each project's Project / Tender Code (including your leave cost code on leave rows). Projects without a code are left blank, and if none of the exported projects have a code the column is left out altogether. The full period list export shows the code in the project column headers, e.g. "Tender A [P123]"

---

## [0.17.0] — 2026-10-13

### Added
- **Leave balance** — set your starting balance and the date it applies to in Settings > Leave, and the app works out your balance from there: month-end accruals (days per month, or days per year spread over 12 months) minus leave taken since that date. Only the leave types ticked under "Count against the balance" are deducted, and public holidays never are. Leave on or before the "as at" date is assumed to be in your starting balance
- **Leave chip on the Timesheet tab** (Log Time header) shows your balance today, plus the projected balance once leave you've booked ahead is taken, e.g. "Leave: 10.25 days (8.75 after booked)". It turns red if the balance goes negative and opens the Leave settings when clicked. Until a starting balance is entered it reads "Set up leave balance"
- **Breakdown in Settings** — balance today, accrued since the as-at date, leave taken, booked ahead and the projected balance
- **Green highlight for leave and public holidays** on the This Week day cards and on both To Do month calendars (hover a day to see what it is; the legend now includes Leave). Public holidays are highlighted even before you book them, and clicking an unbooked holiday on a day card opens the leave form already set to Public Holiday

---

## [0.16.1] — 2026-10-13

### Changed
- **Leave no longer appears as a project** — it is hidden from the project pills, Projects tab, allocation grid and dropdowns. Leave hours are still saved in your timesheet entries (and show in Log History and the Week view) against your leave cost code
- **Log Time shows a read-only leave line** for any day with leave booked (type, hours, and an "Edit leave" button), and the day total includes those leave hours. Saving a half-day entry keeps the leave hours intact
- **Leave is left out of the Hours by Project chart** (project and activity views)
- A project can no longer be created or renamed to the same name as the hidden Leave project

---

## [0.16.0] — 2026-10-13

### Added
- **Leave settings (Settings tab)** — a new Leave section holds your leave cost code (defaults to P011 and can be changed any time), hours per leave day, your current leave balance with an "as at" date, and your accrual (days per month, or days per year spread over 12 months, credited at month end). You can also choose which leave types count against the balance (Vacation Leave by default). These feed the leave balance, which comes in the next update
- **Log leave and public holidays so timesheet days are never blank** — a new "+ Leave" button on each day card (and "Log leave" in Settings) books leave to your Leave project in the timesheet with the leave type as the activity. Pick a type, a single day or a date range, and a full or half day. Ranges skip weekends and public holidays. A half day is added alongside any time you've already logged; a full day asks before replacing existing time (and is skipped, with a note, inside a multi-day range). Click the green leave marker on a day to change it or remove it
- **Public holidays are pre-loaded for South Africa (2026 and 2027)** — a list in the Leave section shows which are booked, and "Book weekday holidays" records them to the same Leave cost code as Public Holiday, without counting them as leave
- A "Leave" project is created automatically the first time you set up or log leave; it carries your leave cost code, and changing the cost code in Settings updates it

---

## [0.15.0] — 2026-10-12

### Added
- **Previous / next buttons when viewing a project photo** — with a photo open you can now step through that project's other photos with ‹ and › buttons (or the left/right arrow keys) instead of closing and reopening each one. A small "2 / 5" counter shows where you are, and it wraps around at either end. The buttons stay hidden if a project only has one photo

---

## [0.14.2] — 2026-10-12

### Changed
- **Day Plan resize marker now appears only on the edge you're hovering or dragging** — instead of marking both the top and bottom of the selected block, a small grip shows on just the edge you're about to adjust (and stays while you drag). The selected block keeps its outline so it's still clear which of several adjacent blocks you're editing

---

## [0.14.1] — 2026-10-12

### Changed
- **Removed the grip marks from Day Plan block edges** — the top and bottom edges still resize by dragging (the cursor changes to a resize arrow when you hover them), just without the extra visual marker

---

## [0.14.0] — 2026-10-12

### Added
- **Drag to change a plan block's duration from either edge** — each block in the Day Plan now has a grip handle on its top and bottom edge (visible when you hover or select the block). Drag the bottom edge to end earlier or later, or the top edge to start earlier or later, in 15-minute steps with the opposite edge staying put. The new duration is saved as soon as you let go
- **Durations are shown on blocks and in the editor**, e.g. "10AM - 11:30AM (1h 30m)", so you can see the length as you drag

### Fixed
- **Resizing or moving a block while the editor was open wiped whatever you'd typed in the project, activity or goal fields** — those now survive the drag

---

## [0.13.6] — 2026-10-09

### Changed
- **Week view rows are now vertically centred** — hours, project and activity text all line up in the middle of the row, so entries with two-line names no longer leave their hours sitting at the top

---

## [0.13.5] — 2026-10-09

### Fixed
- **Week view overlapped on small screens** — the ‹ Week N › navigator sat on top of the List/Week toggle when the Log History card was narrow. It's now a normal part of the control row, so it moves onto its own line instead of overlapping, while the List/Week/Export buttons keep their positions on wide screens

### Changed
- **On narrow cards the Week view's day headers shrink to single letters** (M T W T F S/S) so they no longer run into each other; wide cards keep the full names

---

## [0.13.4] — 2026-10-08

### Changed
- **Week view is more compact, giving Project and Activity names much more room** — day columns are narrower with the date stacked under the day name, hours are centred in their column, and Saturday and Sunday are combined into a single "Sat/Sun" column (their hours are summed; hover the header to see either day's note). No horizontal scrolling needed

---

## [0.13.3] — 2026-10-02

### Fixed
- **Editing an existing timesheet entry from Log History could silently load the wrong (zeroed) values instead of what you'd actually logged** — "Edit" set the new date before switching back to the Timesheet tab, and the tab-switch's own auto-save-draft step then mis-tagged your *current* on-screen form state as a draft for the date you were about to open, which then took priority over the real saved entry. Fixed by switching tabs first, so the draft is correctly attributed to whichever date was previously showing. This could make an edited entry appear to save fine but actually overwrite real hours with zeros — worth double-checking anything edited recently

### Changed
- **Week view's hover-note tooltip moved from the hours cell to the day column header** (e.g. "Mon 28") — the note belongs to the day, not to a specific project, so this avoids implying otherwise

---

## [0.13.2] — 2026-10-02

### Changed
- **Week view's ‹ Week N › navigator moved up into the Log History control row** — it now sits inline on the left, in the space the search/period filters leave open while hiding in Week view, instead of taking its own row above the table

---

## [0.13.1] — 2026-10-02

### Changed
- **Week view (renamed from "Replicon")** — the toggle now just says "Week"
- **Switching to Week view no longer shifts the other Log History buttons left** — the search/period controls and the now-irrelevant Activity toggle hold their position instead of collapsing away, so List/Week/Export stay put

### Added
- **Daily total row in Week view** — a bold "Total" row at the bottom sums every project/activity row per day, plus a week grand total
- **Hover a day's hours in Week view to see that day's log note** — cells with a note get a dotted underline and show the full note as a tooltip

---

## [0.13.0] — 2026-10-02

### Added
- **Replicon view for Log History** — a "List / Replicon" toggle next to the existing history list now shows a week-at-a-time breakdown (Week 40: 28 Sep – 2 Oct, one row per project + activity, hours by day, with a total column), reusing the same grouping already used for the "By Week — Replicon" CSV export. Prev/next arrows step through weeks
- **Activity field on Day Plan blocks and on meetings** — both now have an optional Activity dropdown (same list as Log Time's own activity field). When you import planned hours into Log Time, the activity pulls through automatically alongside the hours, instead of just the hours on their own

### Notes
- If a project has planned blocks or meetings tagged with more than one distinct activity on the same day, Import currently carries through the first one found and sums all the hours together under it, rather than splitting them into separate activity lines — a deliberate simplification for now

---

## [0.12.4] — 2026-10-02

### Fixed
- **Reminder banner colors didn't match between "System" appearance and explicit Dark mode** — System mode was falling back to a generic blue-gray card color instead of the intended warm amber/orange "reminder" treatment, and was missing dark styling entirely for the Snooze/Dismiss buttons and the stacked-reminders count badge and peek layers. Also cleaned up a leftover malformed CSS block (a stray unclosed brace had silently swallowed a set of duplicate dark-mode reminder rules) found while tracking this down. All three appearance modes now render reminders identically where intended

---

## [0.12.3] — 2026-09-23

### Fixed
- **The "+ Add" button on Photos and Links & Resources stayed visible when the card was collapsed** — collapsing now hides it too, leaving just the toggle arrow and title on a clean single line

---

## [0.12.2] — 2026-09-23

### Added
- **Enter now saves/submits from any field inside any modal** — a single global rule replaces the old per-field wiring, so it now also works on Edit Project, Edit/Add Link, and the reminder date field, none of which supported it before. Any modal added in future gets this for free

### Fixed
- **Typing a multi-line note on Add/Edit Task submitted the task on every Enter** instead of starting a new line — Notes now uses Shift+Enter for a new line and plain Enter to save, matching the Quick Note field elsewhere in the app

---

## [0.12.1] — 2026-09-23

### Fixed
- **Long project names in the Timesheet tab's Active Projects pills were hard-cut with no indication there was more text** — the name now truncates with an ellipsis, and hovering a pill shows the full name as a tooltip

---

## [0.12.0] — 2026-09-22

### Added
- **Guided tour** — a 9-step spotlight walkthrough covering the day-card actions, time-blocking, Log Time and Import, Active Projects, To Do, Projects, and Settings. Launch it anytime from "Take the tour" in Settings; Back/Next/Skip and Escape all work, and it remembers when you've seen it

---

## [0.11.25] — 2026-09-22

### Fixed
- **The orange focus highlight on the project Summary field only wrapped the text area, stopping at the formatting toolbar above it** — the toolbar and text area are now treated as one block, so the highlight surrounds the whole thing when you click in to edit

---

## [0.11.24] — 2026-09-22

### Fixed
- **Project names on Active Projects pills were right-aligned instead of centered** — a leftover effect of removing the old delete "×" button, which had been balancing the layout. Names are centered again

---

## [0.11.23] — 2026-09-22

### Removed
- **The hard-delete "×" on Active Projects pills is gone** — it permanently removed a project without cleaning up its logs, tasks, links, or planned time, silently orphaning that data. Archive (from the Projects tab) is now the only way to remove a project from active use, and it's fully reversible via Restore

---

## [0.11.22] — 2026-09-22

### Changed
- **"+ Event" button now uses a purple accent**, matching the purple used for meetings elsewhere on the day card and in the Day Plan timeline

### Added
- **Enter key adds/saves a block in the Day Plan editor** — no need to reach for the "Add block"/"Save changes" button
- **Clicking outside the Day Plan modal closes it**, matching how other modals in the app already behave

---

## [0.11.21] — 2026-09-22

### Changed
- **"Plan+" moved into the day card's action row** — it now sits with "+ Log"/"+ Event"/"+ Task" (same hover-reveal, same style) instead of floating as a separate button in the corner
- **The "Planned" section on a day card now hides once that day has logged hours** — once you've actually logged time, the card shows just the logged hours, not the earlier plan alongside it. The plan itself isn't touched, only its preview on the card

---

## [0.11.20] — 2026-09-22

### Added
- **Intentional time-blocking / work planning** — a new "Plan+" button on each day card in This Week opens an Outlook-style day timeline where you can drag to create, move, and resize blocks of planned time against a project, each block optionally tagged with a goal. Planned blocks show project colors and appear directly on the day card as well, alongside Meetings and Tasks
- **Meetings can now be assigned to a project** — a new "Project (optional)" field on the Add/Edit Event modal lets a meeting's duration count toward that project's planned hours, shown on the Day Plan timeline in the project's color
- **Import from planned hours in Log Time** — when a day has planned blocks (and/or project-assigned meetings), Log Time shows an "Import from planned hours" banner with the total; clicking Import fills the matching project rows with the planned hours (converted to % automatically in percentage mode). This only pre-fills the log entry — it never overwrites what you've already logged, and logging time never changes the plan, so planned vs. actual can be compared side by side

---

## [0.11.19] — 2026-09-18

### Changed
- **Removed the Link button from the Summary formatting toolbar** — it wasn't behaving reliably, so it's gone rather than left half-working
- **Edit/Delete on project links are now hover-only**, matching how task row actions already behave, instead of always taking up space next to every link

### Added
- **Edit button for subtasks** — a small pencil next to each subtask (visible on hover, same treatment as the delete "x") turns the title into an editable field, so a typo no longer means delete-and-redo

---

## [0.11.18] — 2026-09-18

### Added
- **Rich-text formatting for the project Summary field** — a small toolbar (Bold, Italic, Underline, Highlight, Link, bullet/numbered lists, Clear formatting) sits above Summary, letting you format the description instead of it being plain text only. Existing plain-text summaries are unaffected and continue to display exactly as before

### Fixed
- **Highlighted summary text was unreadable in dark mode** — the yellow highlight background doesn't change with the theme, but the text color did, leaving light text on a light-yellow background. Highlighted text now always renders in a dark, readable color regardless of theme

---

## [0.11.17] — 2026-09-15

### Fixed
- **Collapsing a Summary/Photos/Links card on one project collapsed it on every other project too** — the collapsed/expanded state is now tracked per project instead of shared globally, while still persisting across reloads

---

## [0.11.16] — 2026-09-15

### Changed
- **Renamed the app from "Pro x Plan" to "Planner"** in the header and browser tab title — the droplet logo is unchanged
- **Favicon and home-screen icon reverted to the droplet mark alone**, dropping the small "x" that was layered onto it

---

## [0.11.15] — 2026-09-15

### Changed
- **Reverted project reorder back to a line-based drop indicator** — the placeholder-gap slot from the previous release felt jittery in real use. Back to a single accent line, now drawn as its own raised layer instead of an inset shadow, so it stays a clean unbroken line instead of getting cut where it crosses behind the activity/hours fields

---

## [0.11.14] — 2026-09-15

### Changed
- **Project reorder now opens a placeholder slot instead of drawing a line** — dragging a project shows a dashed orange gap between rows at the drop point (Trello/Notion-style) instead of a line that got visually cut where it passed behind the activity/hours fields

---

## [0.11.13] — 2026-09-15

### Fixed
- **Log Time silently re-applied yesterday's activities and extra activity lines to a brand-new day** — opening a date with no saved entry and no in-progress draft used to look up your most recent activity choice per project (including any extra split lines) and pre-fill them, effectively turning your last entry into a running template. A fresh day now starts genuinely blank; an in-progress draft for today, or reopening a day you already logged, still shows exactly what you entered, unchanged

---

## [0.11.12] — 2026-09-10

### Changed
- **Project order in Log Time is now drag-to-reorder** instead of click up/down arrows — grab the handle next to a project and drop it where you want. Works correctly alongside project group filters, and the new order is saved the same way the old arrows did

---

## [0.11.11] — 2026-09-10

### Fixed
- **Replicon CSV export showed garbled dashes when opened in Excel** (e.g. "1 Jun 2026 â€œ 5 Jun 2026" instead of "1 Jun 2026 – 5 Jun 2026") — the file was valid UTF-8 but had no byte-order mark, so Excel guessed the wrong encoding. Both the "Full period list" and "By Week — Replicon" exports now include a UTF-8 BOM so special characters render correctly
- **Replicon export rows weren't sorted** — projects/activities within each week now sort alphabetically instead of following insertion order

### Added
- **Choose which weeks to include in the Replicon export** — selecting "By Week — Replicon" now shows a checklist of every week with logged time (most recent first, all checked by default) with "All"/"None" shortcuts, instead of always exporting every week on record

---

## [0.11.10] — 2026-09-10

### Fixed
- **Log History column widths weren't bound to the card, so dragging could push Notes off-screen** — the resize handles now cap against the card's actual width, scaling the Date and Allocations columns down together to keep Notes at a usable minimum instead of letting the table overflow

---

## [0.11.9] — 2026-09-10

### Added
- **Resizable Date and Allocations columns on the Timesheet Log History table** — drag the edge of either column header to adjust its width; the setting persists across reloads

### Changed
- **Timesheet Log History Edit/Delete buttons are now a hover overlay**, matching the To Do task rows — they no longer take up their own column, so Notes gets the freed-up width

---

## [0.11.8] — 2026-09-10

### Added
- **Clear ("×") button on the project search box** — appears once you start typing, clears the search and refocuses the field in one click
- **Collapsible Summary/Photos/Links & Resources cards** on the project detail page — click the title or the arrow next to it to minimise a card down to just its header. The collapsed/expanded state is shared across all projects and persists across reloads

---

## [0.11.7] — 2026-09-10

### Changed
- **Removed the memo icon in front of task notes** in the task list — the note text now displays on its own

---

## [0.11.6] — 2026-09-10

### Fixed
- **Compact-mode task action buttons sat flush against the top of the row, with no breathing room** — the overlay was positioned relative to the row's outer edge instead of its padding, so it lost the vertical padding every other element in the row keeps. It now sits at the same offset as on wide screens
- **Task notes were always cut to 50 characters**, even when the row had plenty of room to show the whole thing. Notes now display in full and wrap onto additional lines as needed, in both the flat (Due Date/Priority) task list and the per-project task list

---

## [0.11.5] — 2026-09-10

### Changed
- **Projects sidebar collapse button** now uses the same "☰" icon as the reopen button (was a "◀" arrow), and lines up vertically with the "+" add-project button next to it

### Fixed
- **Compact-mode task action buttons (Edit/Sub/Note/Delete) covered the subtask delete button** when a task's subtasks were expanded — the overlay was vertically centered against the whole row (including subtasks), so on a task with subtasks it dropped down over the subtask list. It's now top-aligned instead, same as on wide screens, so it only ever sits over the task's own title row

---

## [0.11.4] — 2026-09-08

### Fixed
- **Task row items didn't sit on the same horizontal line** — the Edit/Sub/Note/Delete action buttons were slightly taller than the checkbox, priority badge and title, so despite all sharing the same top position they visually hung a couple pixels lower. Buttons now match the others' height so the whole row reads as evenly aligned

---

## [0.11.3] — 2026-09-08

### Added
- **Collapsible Projects sidebar** — the Active Projects list can now be toggled closed, at any window width, not just on narrow screens. On desktop, collapsing it hands the full width to the project detail pane, with a "☰ Projects" button to bring it back; the choice persists across reloads. On narrow screens the sidebar now starts closed by default and opens as a slide-in drawer with a tap-outside-to-close backdrop, closing itself automatically once you pick a project (or press Escape) so you land straight on the detail view instead of having to scroll past the list first

---

## [0.11.2] — 2026-09-08

### Changed
- **Task row action-button overlay refined** — dropped the card-style backdrop behind the Edit/Sub/Note/Delete buttons in compact mode, and vertically centered the group against the row instead of pinning it to the top

---

## [0.11.1] — 2026-09-08

### Fixed
- **Task rows wrapped titles one letter per line on narrow screens** — the Edit/Sub/Note/Delete action buttons always reserved their full width in the row's layout even while hidden (only shown on hover), squeezing the title column down to almost nothing on narrow screens. In compact mode (≤920px) the actions now float as an overlay in the corner of the row instead of taking up space, so the title gets the full row width. Unchanged at normal desktop widths

---

## [0.11.0] — 2026-09-08

### Added
- **Two-way Project Photos sync** (Settings → Sync → Photo backup folder, Chrome/Edge only) — connect a folder (point it at the same OneDrive-synced location as the data sync, or a different one) and Project Photos are backed up and restored automatically: adding or deleting a photo pushes the change immediately, no separate upload step, and photos added or removed on another device show up here the same way. Each photo becomes its own file in the folder, alongside a small manifest that tracks what exists and what's been removed, so unrelated text edits never cause every photo to re-upload. Checked on load and when you switch back to the tab, same as the existing data sync
- A small, permanent internal record is kept of anything deleted through this sync, so a device that's been offline for a while doesn't accidentally bring back a photo that was deliberately removed elsewhere

### Changed
- The Photos card's note and the main Sync section's description are updated to reflect that photos can now be covered by sync — the JSON Export/Restore backup still excludes them (unchanged), but folder-sync, once connected, does not

---

## [0.10.0] — 2026-09-08

### Added
- **Cross-device sync via a local file** (Settings → Sync, Chrome/Edge only) — click "Connect sync file" and choose a location inside a folder that OneDrive (or a similar service) syncs; ProxPlan then keeps that file automatically up to date with your data, and OneDrive carries it to your other devices. On each load (and when you switch back to the tab), the app checks the file for anything newer than what it already has and pulls it in; edits here get written back to the file a couple of seconds after you stop typing. A "Sync now" button forces an immediate check, and "Disconnect" forgets the file without touching it on disk. Project photos aren't included (same limitation the manual Export already had) — this is called out in both the new Sync section and the Photos card
- Two rolling before-overwrite snapshots are kept internally (IndexedDB) as a manual recovery path in the rare case a sync pull picks the wrong side of a conflict (e.g. two devices with clocks out of sync)

### Fixed
- **Manual "Export data backup" was missing several real settings** — `plannerProjectGroups`, `plannerActiveGroup`, `plannerDarkMode`, `plannerChartType`, `plannerChartView`, `plannerTimeDraft`, `plannerSimpleLog`, `plannerShowActivity`, `etfRuleOffset`, and `plannerSeenVersion` were all live, in-use keys that the export's hand-maintained key list had never been updated to include, while it still referenced `plannerMsalCfg`, a key nothing writes to anymore since the Outlook integration was removed. Export (and the new sync feature, which share the same underlying code) now scan all of your actual stored data instead of relying on a fixed list, so this can't drift out of date again

---

## [0.9.37] — 2026-09-03

### Changed
- **Week badge text weight now matches the tab bar** — was font-weight 600, is now 500, same as "This Week"/"Timesheet"/etc., for visual consistency across the header

---

## [0.9.36] — 2026-09-03

### Fixed
- **Week picker could open off-screen on the right in compact mode** — it was centered under the badge with no awareness of viewport edges, so on narrow screens it could extend past the right edge (or, after a first fix attempt, the left edge). Now measures its own size against the viewport when opening and clamps its position to stay fully on-screen with an 8px margin, at any width

### Changed
- **Week badge text and calendar icon are now white**, matching the rest of the app's colour-on-orange styling, instead of the dark navy used in the initial version

---

## [0.9.35] — 2026-09-03

### Changed
- **Week picker restyled to match the approved design** — the calendar badge is now a solid orange pill (icon + "Week 36 · date range", collapsing to just the week number in compact mode) and the prev/next arrows are borderless icon buttons, replacing the earlier translucent/bordered look
- **Week picker now shows a real calendar grid** instead of the browser's native week-number spinner — click any week row to jump to it, with Today and month prev/next controls. Always shows Sunday as the first column, independent of locale

### Fixed
- **Native `<input type="week">` icons silently failed** — an earlier attempt used the Tabler icon webfont for the arrows and calendar glyph; the font never actually loaded in testing, leaving invisible buttons. Replaced with the same inline-SVG icon approach already used for the tab bar, which has no external dependency
- **Week-picker's active/selected row could highlight the wrong week** — the grid computed each row's Monday from its leftmost (Sunday) cell, but a Sunday belongs to the *previous* business week, not the one visually sharing its row; now anchored on the row's Monday cell instead

---

## [0.9.34] — 2026-09-03

### Changed
- **Week navigation redesigned** — the prev/next arrows and week label now sit inside a single calendar badge; clicking it opens a small picker with a "Today" shortcut and a native week selector, so you can jump straight to any week instead of clicking through arrows one at a time. The standalone "Today" button is gone, replaced by that picker's shortcut. Closes on Escape or clicking outside

---

## [0.9.33] — 2026-09-02

### Added
- **Calendar import (.ics)** — Settings → Import Calendar lets you upload a `.ics` file (exported from Outlook, Google Calendar, or Apple Calendar) and adds each event as a Planner meeting. Handles all-day events, UTC timestamps (converted to local time), and folded/escaped text per the iCalendar spec. Re-importing the same file updates matching events (matched by their calendar UID) instead of creating duplicates — safe to re-run whenever the source calendar changes. Runs entirely client-side; no account connection or sign-in required, unlike the retired Outlook integration

---

## [0.9.32] — 2026-09-02

### Added
- **Per-project colour picker** — the Edit/Add Project modal now has a "Colour" swatch picker (Settings → Projects, or the Manage Projects sidebar), letting you assign one of the app's 8 palette colours to a specific project instead of relying on its automatic position-in-list colour. An "Auto" (striped) swatch clears the override and reverts to the automatic assignment. Applies consistently everywhere a project gets a colour: the Projects tab sidebar dot, the project detail header, the Timesheet's Active Projects tags, and the Timesheet's Hours-by-Project chart

### Removed
- **Appearance colour palette picker** (Settings → Appearance) — removed; the Theme (Light/System/Dark) toggle remains
- **Outlook Calendar integration** (Settings, developer-gated) — removed for now, including the Azure/MSAL sign-in flow and Graph calendar sync. May return in a different form — see the "Import calendar" discussion for what's being considered instead

---

## [0.9.31] — 2026-08-25

### Added
- **Compact header on narrow screens** (≤920px wide) — tab bar drops its text labels in favour of icon-only buttons (each keeps a tooltip via `title`), the week indicator shortens to "Week ##" (date range hidden), and the Planner calendar's weekday headers shorten to Mon/Tue/Wed/Thu/Fri. Together these stop the Today button and week-nav arrows from being pushed off-screen at narrow widths

### Fixed
- **Weekday headers in the Planner calendar could render blank** — a leftover base CSS rule (`.dn-short{display:none}`) was declared *after* the responsive media query in the stylesheet, so it always won the cascade and suppressed the abbreviated weekday text regardless of screen width; reordered so the responsive rule takes effect correctly at narrow widths
- **Projects tab — adding a task to a project's detail view via Enter key or the Add button could silently do nothing** — the To Do tab and the Projects tab's project-detail view both render the same shared task-group component, including its quick-add input, using an ID derived only from the project name; since both tabs' panels stayed in the DOM after being visited (just hidden), the two quick-add inputs shared one ID, and `getElementById` always resolved to whichever copy rendered first — usually the hidden, empty one in the To Do tab — so anything typed into the visible field on the Projects tab was read from the wrong, empty input. The same collision affected the "Add subtask" and "Add note" inputs for any task visible in both tabs at once. Fixed by clearing the Tasks/Projects panel's rendered content when navigating away from it, so only one copy of these IDs ever exists in the DOM at a time

---

## [0.9.30] — 2026-08-24

### Added
- **Project Groups** — create, rename, and delete groups via the new "Manage Groups" modal (Projects tab sidebar), or create one inline from any filter dropdown's "+ New Group…" option. Assign a project to a group from the existing Edit Project modal; new projects default to whichever group is currently active. A synced filter dropdown appears in Timesheet, Tasks, and Projects — picking a group in any one updates all three. Filtering is comprehensive: Timesheet's project list, allocation grid, hours summary, and log history (down to individual allocations within a day, not just whole rows); Tasks tab's task groups and open/done/overdue counts (General/unassigned tasks always stay visible, since they don't belong to any project); Projects tab's sidebar (active and archived). Reordering projects respects the active filter too, so it won't skip over an out-of-group project
- **Projects tab task list now matches the To Do tab exactly** — same task-count/overdue badge, Active/All/Done filter, subtask display and add, hover-revealed Edit/Sub/Note/Delete actions, and quick-add row. Built by extracting a single shared `renderProjectTaskGroupHtml()` used by both tabs, instead of maintaining two parallel implementations
- **Header redesign** — the logo is now a CSS mask (droplet shape, coloured via the active palette variable) instead of a flat coloured image, so it automatically follows whichever colour palette is selected in Settings; paired with a "Pro *x* Plan" wordmark where the "x" renders in italic serif, accent-coloured, matching a design spec provided for the refresh

### Changed
- Projects tab's task group header no longer repeats the project name — redundant when the page's own title already shows it. The To Do tab still shows it, since it lists multiple project groups together on one screen
- Quick-add task inputs, in both the Projects tab and the To Do tab, now keep focus after adding a task, so multiple tasks can be added in a row without re-clicking into the field each time

### Fixed
- **Task, subtask, reminder, and manual-event IDs could collide** — all four were generated from `Date.now()` alone with no other entropy, so creating two of the same kind within the same millisecond (easy to trigger with fast task entry, not just automated testing) silently merged their identities — toggling or deleting one affected both. All four now include a random suffix, matching the fix already applied earlier to project-group IDs
- **Projects tab sidebar's per-project task count didn't update live** when completing or deleting a task from within that project's own detail view — it only caught up on the next full sidebar render
- **Group-filter dropdowns could fire their change handler unexpectedly on some page loads**, which could pop open an unwanted "new group" prompt — hardened `renderGroupFilters()` to detach the change handler while rebuilding the dropdown's options, then reattach it, so no spurious event can fire regardless of the underlying cause

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
