document.querySelector("button").addEventListener("click",
    function() {
  window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
}, false);