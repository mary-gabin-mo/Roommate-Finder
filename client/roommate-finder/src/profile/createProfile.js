import React, { useState } from "react";
import botProfile from "../images/botProfile.png";
import axios from "axios";
import "./createProfile.css";

function CreateProfile() {
  const [description] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    // validate inputs
    if (!description) {
      alert("Please fill out the description!");
      return;
    }

    try {
      // call to the backend
      const response = await axios.post(
        "http://localhost:8800/api/auth/create-profile",
        {
          profile_id,
          user_id,
          description,
        }
      );

      // show success message
      alert(response.data.message);

      //   // clear the input fields
      //   setName("");
      //   setEmail("");
      //   setPassword("");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Error creating profile. Please try again. (check db connection?) "
      );
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
                <h2 className="form-title">Create profile</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="Description" className="input-label">
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="input-field"
                      value={description}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tell people about yourself.."
                      required
                    />
                  </div>

                  {/* <div>
                    <label htmlFor="emailAddress" className="input-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      className="input-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div> */}

                  {/* <div>
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="input-field"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div> */}

                  <button type="submit" className="create-button">
                    Create Profile
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
