
alert('running this declarative script')
document.body.style.opacity = '.1'


/*Communication with the embedding page and your background script*/
var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    alert("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);

/**/