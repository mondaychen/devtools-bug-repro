// Create a tab in the devtools area
chrome.devtools.panels.create(
  "BugRepro",
  "toast.png",
  "panel.html",
  function (panel) {
    panel.onShown.addListener(function (window) {
      function callback() {
        console.log('callback fired from devtools');
        window.container.innerHTML = 'callback fired from devtools!';
      }

      // when the button is clicked, the callback is fired on Chrome v101
      // but does not fire on Chrome v102+
      window.button.addEventListener('click', function() {
        requestAnimationFrame(callback);
      }, false);
    });
  }
);
