/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.storage.local.set({secretMessage:'Psst!',timeSet:Date.now()}, function() {
      console.log("Secret message saved");
    });
    
    chrome.storage.local.get(['secretMessage','timeSet'], function(data) {
      console.log("The secret message:", data.secretMessage, "saved at:", data.timeSet);
    });
    
    chrome.storage.local.get(function(data) {
      console.log(data);
    });
});