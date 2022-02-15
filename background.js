chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, 'toggle');
    chrome.action.setBadgeText(
        {
            text: "ON",
            tabId: tab.id,
        }
    );
});
