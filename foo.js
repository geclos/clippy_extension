/* global chrome */
chrome.tabs.executeScript({
  code: 'window.getSelection().toString();'
}, selection => {
  console.log(selection[0])
})
