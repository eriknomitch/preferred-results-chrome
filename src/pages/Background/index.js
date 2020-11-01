import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

import _ from 'lodash';

console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps, tab) {

  if (tab.url.startsWith('chrome://')) {
    return;
  }

  // ---------------------------------------------
  chrome.tabs.query({ currentWindow: true, active: false }, (tabs) => {
    const tabsToManage = _.compact(
      tabs.map((tab) => {
        // Don't manage any chrome:// tabs
        if (tab.url.startsWith('chrome://')) {
          return null;
        }

        // Extract the hostname
        // -----------------------------------------
        const hostname = new URL(tab.url).hostname;

        tab.hostname = hostname;

        return tab;
      })
    );

    // Send tabs to content script
    // -------------------------------------------
    chrome.runtime.sendMessage({ action: 'setData', tabs: tabsToManage });
  });
});
