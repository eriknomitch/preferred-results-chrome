import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import './index.css';

import _ from 'lodash';

const renderNewTab = (tabs) => {

  const tabsSorted = _.groupBy(tabs, "hostname");

  render(<Newtab tabs={tabsSorted} />, window.document.querySelector('#app-container'));
};

chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === 'setData') {
    renderNewTab(msg.tabs);
  }
});

renderNewTab([]);

