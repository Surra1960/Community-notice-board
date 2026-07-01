# Community Notice Board

A small web project that displays community notices in a clean, card-based layout.

## What this project is

A community notice board built with HTML, CSS, and JavaScript. It shows notice cards with titles, descriptions, categories, and dates so users can browse announcements easily.

## What I improved today

- Added a working notice list that renders dynamically from a JavaScript array
- Created filter buttons for `All`, `Announcement`, `Event`, and `Urgent`
- Implemented category filtering so clicking a button updates the displayed cards immediately
- Kept the layout simple and readable while organizing notices into clear cards

## What it currently does

- Displays notice cards dynamically in the browser
- Shows title, category, description, and date for each notice
- Filters notices by category using the top buttons
- Clears and rebuilds the card list on each filter selection

## What I will do next (search)

- Add a search input field above the notice board
- Implement live search that filters notices by keyword
- Support search in both title and description text
- Make the search case-insensitive for a better user experience
- Combine search results with category filtering so users can narrow down notices efficiently

## Future enhancements

- Add smooth CSS transitions when cards appear or disappear
- Add a form to let users create new notices dynamically
- Store notices in local storage so data persists across page reloads
- Improve responsive styling for mobile screen sizes

# Community Notice Board

A small web project that displays community notices in a clean, card-based layout using HTML, CSS, and vanilla JavaScript.

## Summary of today's work

- **Live search:** implemented a working live search input that filters notices by keyword (searches title and description, case-insensitive) and updates results instantly as you type.
- **UI animations:** added smooth entrance/exit and hover animations for notice cards to improve feedback and polish.
- **Improved grid layout:** refactored the card layout to a responsive CSS Grid so cards rearrange cleanly across viewport sizes.

## Current behavior

- Dynamically renders notice cards with title, category, description, and date.
- Filters by category using the top filter buttons.
- Performs live, case-insensitive search across title and description fields.
- Animates card appearance and layout changes for a smoother UX.

## Next tasks (planned)

- **Add Notice form** — status: not started
	- Acceptance: user can type title, description, category, and date; submitting adds a new notice card to the board.
- **Form validation** — status: not started
	- Acceptance: no empty fields; date must be a valid date string and (optionally) not in the past; show inline error messages.
- **Persist notices to localStorage** — status: not started
	- Acceptance: notices (including newly added ones) are saved to `localStorage` and reloaded on page refresh.

