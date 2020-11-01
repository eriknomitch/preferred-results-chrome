import React from 'react';
import './Newtab.css';
import './Newtab.scss';

const Newtab = (props) => {
  const { tabs } = props;

  console.log(tabs);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>Tabs []</span>
          <div>
            {Object.keys(tabs).map((key) => {
              const tabGroup = tabs[key];

              return (
              <div>
                <div>{key}</div>
                <div>{tabGroup.length}</div>
              </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Newtab;
