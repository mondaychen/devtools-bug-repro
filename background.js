// chrome.scripting.registerContentScripts(
//   [
//     {
//       id: 'hook',
//       matches: ['<all_urls>'],
//       js: ['devtools_backend.js'],
//       runAt: 'document_start',
//       world: chrome.scripting.ExecutionWorld.MAIN,
//     },
//   ],
//   function () {
//     // When the content scripts are already registered, an error will be thrown.
//     // It happens when the service worker process is incorrectly duplicated.
//     if (chrome.runtime.lastError) {
//       console.error(chrome.runtime.lastError);
//     }
//   },
// );