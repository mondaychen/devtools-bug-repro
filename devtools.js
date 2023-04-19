// const backgroundPageConnection = chrome.runtime.connect({
//   name: "devtools",
// });

// backgroundPageConnection.onMessage.addListener((message) => {
//   // Handle messages from the background script
//   console.log("Message in devtools:", message);
// });

const sandbox = document.getElementById('sandbox');

// Create a tab in the devtools area
chrome.devtools.panels.create(
  "demo",
  "toast.png",
  "panel.html",
  function (panel) {
    panel.onShown.addListener(function (panel) {
      window.addEventListener('message', function (event) {
        // Handle messages from the content script
        console.log("Message in devtools:", event.data);
        if (event.data.code) {
          chrome.devtools.inspectedWindow.eval(event.data.code);
        }
      });

      sandbox.contentWindow.postMessage('hello from devtools', '*');
    });
  }
);
