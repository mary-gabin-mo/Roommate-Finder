import './App.css';
import people from 'client/roommate-finder/src/images/people.png';

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
            <img src={people}/>
          </section>
          
          <section className="features">
            <h2 className="sectionTitle">Your Perfect Match, Right Here On Campus</h2>
            <div>
              <div>
                <div>
                  <p>Find potential roommates that match your criteria</p>
                  {/*<img src></img>*/}
                </div>
              </div>

              <div>
                <div>
                  <p>Start chatting with potential roommates to find the right fit</p>
                  {/*<img src></img>*/}
                </div>
              </div>

              <div>
                <div>
                  <p>Start chatting with potential roommates to find the right fit</p>
                  {/*<img src></img>*/}
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </header>
      </div>
    </main>
  );
}

export default App;
