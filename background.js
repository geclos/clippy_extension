/* global chrome */
chrome.commands.onCommand.addListener(command => {
  chrome.tabs.executeScript({
    code: 'window.getSelection().toString();'
  }, selection => {
    console.log(selection[0])
  })
})
