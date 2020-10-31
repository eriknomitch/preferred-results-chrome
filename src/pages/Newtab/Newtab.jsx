import React from 'react';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span>New Tab</span>
        </p>
      </header>
    </div>
  );
};

console.log("addListener");

chrome.runtime.onMessage.addListener((msg, sender) => {
  console.log(msg);
  console.log(sender);
  if (msg.action === 'setData') {
    console.log("SET DATA");
    console.log(msg.data);
    console.log(msg.tabs);
    // document.getElementById('text').textContent = JSON.stringify(msg.data, null, '  ');
    // you can use msg.data only inside this callback
    // and you can save it in a global variable to use in the code 
    // that's guaranteed to run at a later point in time
  }
});

export default Newtab;
