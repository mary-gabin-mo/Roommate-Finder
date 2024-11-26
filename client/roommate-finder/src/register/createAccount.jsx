import React, { useState } from 'react';
import botProfile from '../images/botProfile.png';
import axios from 'axios';
import './createAccount.css';
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    // validate inputs
    if (!name || !email || !password) {
      alert('All fields are required!');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    try {
      // call to the backend
      const response = await axios.post("http://localhost:8800/api/auth/register", {
        name,
        email,
        password,
        user_type: "STUDENT", 
      });

      // show success message
      alert(response.data.message);

      // Redirect to Create Profile page
      navigate(`/CreateProfile?userId=${response.data.user_id}`);
    } catch (error) {
      console.error("Error creating account:", error);
      alert(error.response?.data?.message || "Error creating account. Please try again.");
    }
  };

  return (
    <main className="create-account-container">
      <div className="content-wrapper">
        <section className="main-content">
          <div className="content-columns">
            <div className="image-column">
              <img className="bot-profile" src={botProfile} alt="Bot Profile" />
            </div>

            <div className="form-column">
              <div className="form-content">
                <h2 className="form-title">Create account</h2>
                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="fullName" className="input-label">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="input-field"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

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

                  <button type="submit" className="sign-up-button">
                    Sign Up
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

export default CreateAccount;
