import logo from './logo.svg';
import './App.css';
import Header from './header'
import Footer from './footer';
import Main from './main';
import Post from './post';

function App() {
  return (
    <div>
      <Header />
      <Main>
        <>
          <Post />
        </>
      </Main>
      <Footer />

    </div>


  );
};

export default App;
