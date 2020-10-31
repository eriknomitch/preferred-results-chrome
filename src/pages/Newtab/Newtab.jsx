import React from 'react';
import './Newtab.css';
import './Newtab.scss';

const Newtab = (props) => {
  const { tabs } = props;
  debugger;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span>Tabs [{tabs.length}]</span>
        </p>
      </header>
    </div>
  );
};


export default Newtab;
