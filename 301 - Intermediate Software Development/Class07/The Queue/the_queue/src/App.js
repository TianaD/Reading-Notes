import logo from './logo.svg';
import './App.css';
import Main from './Components/main';
import Footer from './Components/footer';
import Header from './Components/header';
import { useState } from 'react';


function App() {
const [numberOfPeopleInTheQueue, setnumberOfPeopleInTheQueue] = useState(0);
const [namesOfPeopleInTheQueue, setnamesOfPeopleInTheQueue] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Main setnamesOfPeopleInTheQueue={setnamesOfPeopleInTheQueue}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
