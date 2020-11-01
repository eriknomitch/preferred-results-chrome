import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import './index.css';

import _ from 'lodash';

const renderNewTab = (tabs) => {

  render(<Newtab tabs={tabs} />, window.document.querySelector('#app-container'));
};

chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === 'setData') {
    renderNewTab(msg.tabs);
  }
});

renderNewTab([]);

