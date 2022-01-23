chrome.action.onClicked.addListener((tab) => {
    console.log("Kliknuto", tab);
    chrome.tabs.sendMessage(tab.id, 'toggle');
    chrome.action.setBadgeText(
        {
            text: "ON",
            tabId: tab.id,
        }
    );
});
