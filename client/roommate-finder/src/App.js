import './App.css';
import people from './images/people.png';
import chatbot from './images/chatbot.png';
import pfp from './images/pfp.png';
import pickinguser from './images/pickinguser.png';

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
            <img src={people} alt='people'/>
          </section>
          
          <section className="features">
            <h2 className="sectionTitle">Your Perfect Match, Right Here On Campus</h2>
            <div>
              <div>
                <div>
                  <p>Find potential roommates that match your criteria</p>
                  <img src={pickinguser} alt='pickinguser'/>
                </div>
              </div>

              <div>
                <div>
                  <p>Start chatting with potential roommates to find the right fit</p>
                  <img src={chatbot} alt='chatbot'/>
                </div>
              </div>

              <div>
                <div>
                  <p>Start chatting with potential roommates to find the right fit</p>
                  <img src={pfp} alt='pfp'/>
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
