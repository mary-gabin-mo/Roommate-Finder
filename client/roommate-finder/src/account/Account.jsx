import React, { useState } from 'react';
import './Account.css';

function Account() {
    const [isEditing, setIsEditing] = useState(false); 

    // hard code for now
    const [profile, setProfile] = useState({
        fullName: 'John Doe',
        description: 'Looking for a clean, quiet roommate.',
        rentRange: '$1000',
        cleanliness: '8 / 10',
        roomCapacity: '1 / 10',
        location: 'NW',
        noiseTolerance: '5 / 10',
        socialHabits: 'Introvert',
        sleepSchedule: 'Night Owl',
    });

    const handleSave = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        setProfile({
            fullName: formData.get('fullName'),
            description: formData.get('description'),
            rentRange: formData.get('rentRange'),
            cleanliness: formData.get('cleanliness'),
            roomCapacity: formData.get('roomCapacity'),
            location: formData.get('location'),
            noiseTolerance: formData.get('noiseTolerance'),
            socialHabits: formData.get('socialHabits'),
            sleepSchedule: formData.get('sleepSchedule'),
        });
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            {isEditing ? (
                <form className="form-wrapper" onSubmit={handleSave}>
                    <h1 className="title">Edit Account</h1>

                    <label className="input-label">Full Name</label>
                    <input
                        className="text-input"
                        type="text"
                        name="fullName"
                        defaultValue={profile.fullName}
                    />

                    <label className="input-label">Description</label>
                    <textarea
                        className="text-area"
                        name="description"
                        defaultValue={profile.description}
                    ></textarea>

                    <label className="input-label">Rent Range</label>
                    <input
                        className="text-input"
                        type="number"
                        name="rentRange"
                        max="5000"
                        defaultValue={profile.rentRange}
                    />

                    <label className="input-label">Cleanliness</label>
                    <input
                        className="text-input"
                        type="number"
                        name="cleanliness"
                        min="1"
                        max="10"
                        defaultValue={profile.cleanliness}
                    />

                    <label className="input-label">Room Capacity</label>
                    <input
                        className="text-input"
                        type="number"
                        name="roomCapacity"
                        min="1"
                        max="10"
                        defaultValue={profile.roomCapacity}
                    />

                    <label className="input-label">Noise Tolerance</label>
                    <input
                        className="text-input"
                        type="number"
                        name="noiseTolerance"
                        defaultValue={profile.noiseTolerance}
                        min="1"
                        max="10"   
                    />

                    <label className="input-label">Location</label>
                    <select
                        className="text-input"
                        name="location"
                        defaultValue={profile.location}

                        >
                            <option value="NW">Northwest</option>
                            <option value="NE">Northeast</option>
                            <option value="SW">Southwest</option>
                            <option value="SE">Southeast</option>
                        </select>

                    <label className="input-label">Social Habits</label>
                    <select
                        className="text-input"
                        name="socialHabits"
                        defaultValue={profile.socialHabits}

                        >
                            <option value="Extrovert">Extrovert</option>
                            <option value="Introvert">Introvert</option>
                            <option value="Ambivert">Ambivert</option>
                        </select>

                    <label className="input-label">Sleep Schedule</label>
                    <select
                        className="text-input"
                        name="sleepSchedule"
                        defaultValue={profile.sleepSchedule}

                        >
                            <option value="Early Bird">Early Bird</option>
                            <option value="Night Owl">Night Owl</option>
                        </select>

                    <button type="submit" className="edit-button">
                        Save
                    </button>
                </form>
            ) : (

                <div className="view-mode">
                    <h1 className="title">Account</h1>
                    <p className="view-field"><strong>Full Name:</strong> {profile.fullName}</p>
                    <p className="view-field"><strong>Description:</strong> {profile.description}</p>
                    <p className="view-field"><strong>Rent Range:</strong> {profile.rentRange}</p>
                    <p className="view-field"><strong>Cleanliness:</strong> {profile.cleanliness}</p>
                    <p className="view-field"><strong>Room Capacity:</strong> {profile.roomCapacity}</p>
                    <p className="view-field"><strong>Location:</strong> {profile.location}</p>
                    <p className="view-field"><strong>Noise Tolerance:</strong> {profile.noiseTolerance}</p>
                    <p className="view-field"><strong>Social Habits:</strong> {profile.socialHabits}</p>
                    <p className="view-field"><strong>Sleep Schedule:</strong> {profile.sleepSchedule}</p>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
}

export default Account;
