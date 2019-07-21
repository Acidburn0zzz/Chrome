
alert('running this declarative script')
document.body.style.opacity = '.1'


/*Communication with the embedding page and your background script*/
var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  
  
    /*Simple one-time requests */
    
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
    });
    
    /**/
    if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    alert("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);

/**/



/*Simple one time requests*/
chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if (request.greeting == "hello")
          sendResponse({farewell: "goodbye"});
      });
/**/