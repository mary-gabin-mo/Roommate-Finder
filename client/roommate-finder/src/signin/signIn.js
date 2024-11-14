import React, { useState } from 'react';
import chatbotLaptop from '../images/chatbotLaptop.png';
import './signIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('User Details:', { email, password });

    // validate inputs
    if (!email || !password) {
      alert('All fields are required!');
      return;
    }

  };

  return (
    <main className="sign-in-container">
      <div className="content-wrapper">
        <section className="main-content">
          <div className="content-columns">
            <div className="image-column">
              <img className="chat-bot-laptop" src={chatbotLaptop} alt="Bot Profile" />
            </div>

            <div className="form-column">
              <div className="form-content">
                <h2 className="form-title">Back to Finding <br/> Your Match</h2>
                <form onSubmit={handleSubmit}>

                  {/* email input */}
                  <div>
                    <label htmlFor="emailAddress" className="input-label">Email Address</label>
                    <input
                      type="email"
                      id="emailAddress"
                      className="input-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* password input */}
                  <div>
                    <label htmlFor="password" className="input-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="input-field"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <button type="submit" className="sign-in-button">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignIn;
