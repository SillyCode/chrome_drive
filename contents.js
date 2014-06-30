chrome.browserAction.onClicked.addListener(function(activeTab) {
	var newURL = "https://drive.google.com/";
	chrome.tabs.create({ url : newURL });
});