// Send data via message to background.js
// chrome.runtime.sendMessage({ hello: 'from contentjs' }, function (response) {
//   console.log('in contentjs')
//   console.log(response)
// });

// // Listen to messages sent by content.js
// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//   // iframe is defined by background.html
//   var iframe = document.getElementById('extension-iframe')

//   // Send message to script living inside iframe
//   iframe.contentWindow.postMessage(msg, '*')

//   // Listen to messages sent by script living inside iframe
//   window.addEventListener('message', function (event) {
//     console.log('backgroundjs')
//     // Reply to content.js
//     sendResponse(event.data)
//   }, { once: true })

//   return true // Indicates async sendResponse behavior
// })