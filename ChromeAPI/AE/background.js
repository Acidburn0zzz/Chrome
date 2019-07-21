//  chrome.runtime.onInstalled.addListener(function() {
//     // chrome.contextMenus.create({
//     //   "id": "sampleContextMenu",
//     //   "title": "Sample Context Menu",
//     //   "contexts": ["selection"]
//     // });
//   });
  
  
/* Simple one-time requests */
chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });
    });
})

/**/
    
chrome.webNavigation.onCompleted.addListener(function() {
    //   alert("This is my favorite website!");

      
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
}, {url: [{urlMatches : 'https://www.google.com/'}]});
  
  
/* Add a badge */
        

// chrome.browserAction.setBadgeText({text: 'ON'});
// chrome.browserAction.setBadgeBackgroundColor({color: 'red'});

/**/


/* deciding when an extension can be used  */
        

//   chrome.runtime.onInstalled.addListener(function() {
//     // Replace all rules ...
    

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
  
//     /**/
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       // With a new rule ...
//       chrome.declarativeContent.onPageChanged.addRules([
//         {
//           // That fires when a page's URL contains a 'g' ...
//           conditions: [
//             new chrome.declarativeContent.PageStateMatcher({
//               pageUrl: { urlContains: 'g' },
//             })
//           ],
//           // And shows the extension's page action.
//           actions: [ new chrome.declarativeContent.ShowPageAction() ]
//         }
//       ]);
//     });
//   });
  
  
  /**/
  

/*Omnibox*/
// chrome.omnibox.onInputEntered.addListener(function(text) {
//   // Encode user input for special characters , / ? : @ & = + $ #
//   var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
//   chrome.tabs.create({ url: 'https://www.nba.com' });
// });

/**/


/*Inject Programmatically*/

// chrome.webNavigation.onCompleted.addListener(function() {
//     chrome.tabs.executeScript({
//       code: 'document.body.style.backgroundColor="red"'
//     });
// });


/**/

/*Context Menus*/

  const kLocales = {
    'com.au': 'Australia',
    'com.br': 'Brazil',
    'ca': 'Canada',
    'cn': 'China',
    'fr': 'France',
    'it': 'Italy',
    'co.in': 'India',
    'co.jp': 'Japan',
    'com.ms': 'Mexico',
    'ru': 'Russia',
    'co.za': 'South Africa',
    'co.uk': 'United Kingdom'
  };
  chrome.runtime.onInstalled.addListener(function() {
    for (let key of Object.keys(kLocales)) {
      chrome.contextMenus.create({
        id: key,
        title: kLocales[key],
        type: 'normal',
        contexts: ['selection',"page", "image", "link"],
      });
    }
  });
  
  
    chrome.contextMenus.onClicked.addListener(function(   event   ){
        console.log(   event   )
    })
/**/

/*Commands*/
// to move through browser tabs
  chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      // Sort tabs according to their index in the window.
      tabs.sort((a, b) => { return a.index < b.index; });
      let activeIndex = tabs.findIndex((tab) => { return tab.active; });
      let lastTab = tabs.length - 1;
      let newIndex = -1;
      if (command === 'flip-tabs-forward')
        newIndex = activeIndex === 0 ? lastTab : activeIndex - 1;
      else  // 'flip-tabs-backwards'
        newIndex = activeIndex === lastTab ? 0 : activeIndex + 1;
      chrome.tabs.update(tabs[newIndex].id, {active: true, highlighted: true});
    });
  });
  
  /**/
  
  