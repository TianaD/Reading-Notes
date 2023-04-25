// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Info from './components/Info';


class App extends Component {
  constructor(props) {
    super()
      this.state={
        hello:'hey how are you',
        goodbye:'see you later',
        welcome:'nice to meet you'

      }
  }  
  render(){
    return(
      <div>
        <h1>{this.state.hello}</h1>
        {/* <h2>{this.state.goodbye}</h2> */}
        <Info
        auRevoir={this.state.goodbye}
        Tiana='Tiana'
        />
      </div>
     )
  }
}

export default App;





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }