import './Home.css';
import glasses from '../images/glassespfp.png';
import green from '../images/greenpfp.png';
import hat from '../images/hatpfp.png';
import blonde from '../images/blondepfp.png';
import React, { useState } from 'react';

const ProfileCard = ({ imageSrc, name }) => (
  <article className="profile-card">
    <img src={imageSrc} alt={`Profile picture of ${name}`} className="profile-image" />
    <h3 className="profile-name">{name}</h3>
    <button className="view-profile-button">View profile</button>
  </article>
);

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchSubmit = (e) => {
      e.preventDefault(); // prevent page reload
      console.log(`Searching for: ${searchQuery}`);
      // add search logic here
    }

    const [showDropdown, setShowDropdown] = useState(false); 
    const [filters, setFilters] = useState([]);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    const handleFilterChange = (filter) => {
        if (filters.includes(filter)) {
          setFilters(filters.filter((item) => item !== filter));
        } else {
          setFilters([...filters, filter]);
        }
      };
    
    const profiles = [
        {id: 1, name: "John Doe", imageSrc: glasses,},
        {id: 2, name: "Jane Doe", imageSrc: green,},
        {id: 3, name: "Alex Smith", imageSrc: hat,},
        {id: 4, name: "Emily Davis", imageSrc: blonde,},
    ];

    const ProfileCard = ({ name, imageSrc }) => (
        <div className="profile-card">
          <img src={imageSrc} alt={name} className="profile-image" />
          <h3 className="profile-name">{name}</h3>
          <button className="view-profile-button">View profile</button>
        </div>
      );

  return (
    <main className="profile-explorer">
      <div className="container">
        <h1 className="title">Profile Explorer</h1>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            id="searchInput"
            className="search-input"
            placeholder="Search profiles"
            /*onChange={(e) => setSearchQuery(e.target.value)}*/ // update search query
          />
          <div className="dropdown">
            <button
              type="button"
              className="preferences-button"
              onClick={toggleDropdown}
            >
              Preferences
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <label>
                  <input
                    type="checkbox"
                    value="Cleanliness"
                    onChange={() => handleFilterChange("Cleanliness")}
                  />
                  Cleanliness
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Noise Tolerance"
                    onChange={() => handleFilterChange("Noise Tolerance")}
                  />
                  Noise Tolerance
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Social Habits"
                    onChange={() => handleFilterChange("Social Habits")}
                  />
                  Social Habits
                </label>
              </div>
            )}
          </div>
        </form>
        <section className="profile-grid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} name={profile.name} imageSrc={profile.imageSrc} />
        ))}
      </section>
      </div>
    </main>
  );
};

export default Home;
