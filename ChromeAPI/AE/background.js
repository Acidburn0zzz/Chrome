//  chrome.runtime.onInstalled.addListener(function() {
//     // chrome.contextMenus.create({
//     //   "id": "sampleContextMenu",
//     //   "title": "Sample Context Menu",
//     //   "contexts": ["selection"]
//     // });
//   });
  
  
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
chrome.omnibox.onInputEntered.addListener(function(text) {
  // Encode user input for special characters , / ? : @ & = + $ #
  var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
  chrome.tabs.create({ url: 'https://www.nba.com' });
});

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
/**/