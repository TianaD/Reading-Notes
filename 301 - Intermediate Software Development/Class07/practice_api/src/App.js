import logo from './logo.svg';
import './App.css';
import Data from './data.json';
import React from 'react';



function App() {
  // let listItems = [<li>{Data[0]}</li>,
  //                 <li>{Data[1]}</li>,
  //                 <li>{Data[2]}</li>]
    let listItems = Data.map()
  return (
    <div className="App" style={{ border: "3px solid aqua" }}>
      <h1>View Cool Quotes</h1>

      <header className="App-Header">

      </header>

      <h3>
        <ul>
          {listItems}
        </ul>
      </h3>
    </div>
  );
}

export default App;
