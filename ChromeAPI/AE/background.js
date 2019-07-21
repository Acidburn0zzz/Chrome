 chrome.runtime.onInstalled.addListener(function() {
    // chrome.contextMenus.create({
    //   "id": "sampleContextMenu",
    //   "title": "Sample Context Menu",
    //   "contexts": ["selection"]
    // });
  });
  
  
    chrome.webNavigation.onCompleted.addListener(function() {
      alert("This is my favorite website!");
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  }, {url: [{urlMatches : 'https://www.google.com/'}]});