// This one acts in the context of the panel in the Dev Tools
//
// Can use
// chrome.devtools.*
// chrome.extension.*

window.container = document.getElementById('container');
window.button = document.querySelector('#btn-devtools');

function callback() {
  console.log('callback fired from panel');
  window.container.innerHTML = 'callback fired from panel!';
}

document.querySelector('#btn-panel').addEventListener('click', function() {
  requestAnimationFrame(callback);
}, false);


