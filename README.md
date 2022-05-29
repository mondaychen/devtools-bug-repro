# Chrome DevTools Extension `requestAnimationFrame` bug

This is a minimal repro of this devtools_page related bug on Chrome v102+.

## Installation
- Open chrome://extensions
- Enable 'Developer Mode' checkbox
- Click 'Load unpacked extensions...'
- Select the devtools-bug-repro folder
- A "BugRepro" panel will be added to your devtools

## About the bug

On Chrome v101 and earlier versions, `requestAnimationFrame` works on both `devtools_page.html` and the `panel.html` (loaded via `chrome.devtools.panels.create`).

Since v102, it stops working on `devtools_page.html`. If you click "requestAnimationFrame from devtools_page" button, nothing will happen.