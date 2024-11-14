import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <div className="App">
        <header className="App-header">
          <h1 className="logo">LOGO</h1>
          <nav>
            <a href="#signin" className='signIn'>Sign in</a>
          </nav>

          <section className="heroSection">
            <div className="heroContent">
              <h2>Find Your Perfect <br/> Roommate Today!</h2>
              <button>
                Create Account
              </button>
            </div>
            {/*<img src></img>*/}
          </section>

          <h2 className="sectionTitle">Your Perfect Match, Right Here On Campus</h2>
          <section></section>
        </header>
      </div>
    </main>
  );
}

export default App;
