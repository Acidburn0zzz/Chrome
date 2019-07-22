
// alert('running this declarative script')
document.body.style.opacity = '.1'


/*Communication with the embedding page and your background script*/
// var port = chrome.runtime.connect();

/*Long-lived connections*/
var port = chrome.runtime.connect({name: "knockknock"});
/**/


window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  
    /*Long-lived connections*/
        
        port.postMessage({joke: "Knock knock"});
        port.onMessage.addListener(function(msg) {
          if (msg.question == "Who's there?")
            port.postMessage({answer: "Madame"});
          else if (msg.question == "Madame who?"){
            port.postMessage({answer: "Madame... Bovary"});
          }
          else if (msg.question ==  "I don't get it."){
             /*    Port lifetime */
            port.disconnect()
            /**/
          }
          console.log(msg.question)
        });
    /**/
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


