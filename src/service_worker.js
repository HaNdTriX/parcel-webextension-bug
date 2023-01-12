const extensionPage = new URL("./index.html", import.meta.url).toString();

chrome.runtime.onInstalled.addListener(() =>
  chrome.tabs.create({
    url: extensionPage,
  })
);

chrome.action.onClicked.addListener(() =>
  chrome.tabs.create({
    url: extensionPage,
  })
);
