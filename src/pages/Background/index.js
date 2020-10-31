import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps, tab) {
  // console.log(tabId);
  // console.log(changedProps);
  // console.log(chrome.tabs);
  console.log("tab:");
  console.log(tab);

  chrome.tabs.executeScript(
    tab.id,
    {
      code:
        'document.getElementsByTagName("header")[0].style.backgroundColor = "red"',
    },
    (result) => {
      console.log("result:");
      console.log(result);
    }
  );

  chrome.tabs.query({}, function (tabs) {
    console.log(tabs);
  });
});
