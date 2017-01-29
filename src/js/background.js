var load = [];

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    load[tab[0].id] = request.load;
    sendResponse(load);
    if (load[tab[0].id]) {
      chrome.browserAction.setBadgeText({tabId: tab[0].id, text: "ON"});
    }
    else {
      chrome.browserAction.setBadgeText({tabId: tab[0].id, text: ""});
    }
  });
});
