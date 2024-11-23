import React, { useState } from "react";
import './Account.css';

function Account() {
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "John Doe",
        description: "Looking for a clean, quiet roommate.",
        rentRange: "1000",
        cleanliness: "8",
        roomCapacity: "1",
        location: "NW",
        noiseTolerance: "5",
        socialHabits: "Introvert",
        sleepSchedule: "Early Bird",
    });

    const handleChange = (field, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
        console.log("Updated Data:", formData);
        alert("Profile updated successfully");
    };

    return (
        <main className="profile-container">
            <form className="form-wrapper" onSubmit={(e) => e.preventDefault()}>

                <div>
                    <label htmlFor="fullName" className="input-label">
                        Full Name
                    </label>
                    {!isEditing ? (
                        <p>{formData.fullName}</p>
                    ) : (
                        <input
                            type="text"
                            id="fullName"
                            className="text-input"
                            value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                        />
                    )}
                </div>

                <div>
                    <label htmlFor="description" className="input-label">
                        Description
                    </label>
                    {!isEditing ? (
                        <p>{formData.description}</p>
                    ) : (
                        <textarea
                            id="description"
                            className="text-area"
                            value={formData.description}
                            onChange={(e) => handleChange("description", e.target.value)}
                        />
                    )}
                </div>

                <div>
                    <label htmlFor="rentRange" className="input-label">
                        Rent Range
                    </label>
                    {!isEditing ? (
                        <p>${formData.rentRange}</p>
                    ) : (
                        <input
                            type="number"
                            id="rentRange"
                            className="text-input"
                            value={formData.rentRange}
                            onChange={(e) => handleChange("rentRange", e.target.value)}
                        />
                    )}
                </div>

                <div>
                    <label htmlFor="cleanliness" className="input-label">
                        Cleanliness
                    </label>
                    {!isEditing ? (
                        <p>{formData.cleanliness} / 10</p>
                    ) : (
                        <input
                            type="number"
                            id="cleanliness"
                            className="text-input"
                            value={formData.cleanliness}
                            onChange={(e) => handleChange("cleanliness", e.target.value)}
                            min="1"
                            max="10"
                        />
                    )}
                </div>

                <div>
                    <label htmlFor="roomCapacity" className="input-label">
                        Room Capacity
                    </label>
                    {!isEditing ? (
                        <p>{formData.roomCapacity} / 10</p>
                    ) : (
                        <input
                            type="number"
                            id="roomCapacity"
                            className="text-input"
                            value={formData.roomCapacity}
                            onChange={(e) => handleChange("roomCapacity", e.target.value)}
                            min="1"
                            max="10"
                        />
                    )}
                </div>

                <div>
                    <label htmlFor="location" className="input-label">
                        Location
                    </label>
                    {!isEditing ? (
                        <p>{formData.location}</p>
                    ) : (
                        <select
                            id="location"
                            className="text-input"
                            value={formData.location}
                            onChange={(e) => handleChange("location", e.target.value)}
                        >
                            <option value="NW">Northwest</option>
                            <option value="NE">Northeast</option>
                            <option value="SW">Southwest</option>
                            <option value="SE">Southeast</option>
                        </select>
                    )}
                </div>

                <div>
                    <label htmlFor="noiseTolerance" className="input-label">
                        Noise Tolerance
                    </label>
                    {!isEditing ? (
                        <p>{formData.noiseTolerance} / 10</p>
                    ) : (
                        <input
                            type="number"
                            id="noiseTolerance"
                            className="text-input"
                            value={formData.noiseTolerance}
                            onChange={(e) => handleChange("noiseTolerance", e.target.value)}
                            min="1"
                            max="10"
                        />
                    )}
                </div>

                <div>
                    <label htmlFor="socialHabits" className="input-label">
                        Social Habits
                    </label>
                    {!isEditing ? (
                        <p>{formData.socialHabits}</p>
                    ) : (
                        <select
                            id="socialHabits"
                            className="text-input"
                            value={formData.socialHabits}
                            onChange={(e) => handleChange("socialHabits", e.target.value)}
                        >
                            <option value="Extrovert">Extrovert</option>
                            <option value="Introvert">Introvert</option>
                            <option value="Ambivert">Ambivert</option>
                        </select>
                    )}
                </div>

                <div>
                    <label htmlFor="sleepSchedule" className="input-label">
                        Sleep Schedule
                    </label>
                    {!isEditing ? (
                        <p>{formData.sleepSchedule}</p>
                    ) : (
                        <select
                            id="sleepSchedule"
                            className="text-input"
                            value={formData.sleepSchedule}
                            onChange={(e) => handleChange("sleepSchedule", e.target.value)}
                        >
                            <option value="Early Bird">Early Bird</option>
                            <option value="Night Owl">Night Owl</option>
                        </select>
                    )}
                </div>

                <div>
                    {!isEditing ? (
                        <button
                            type="button"
                            className="edit-button"
                            onClick={() => setIsEditing(true)}
                        >
                            <span className="edit">Edit</span>
                        </button>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="edit-button"
                                onClick={handleSave}
                            >
                                <span className="save">Save Changes</span>
                            </button>
                            <button
                                type="button"
                                className="edit-button"
                                onClick={() => setIsEditing(false)}
                            >
                                <span className="cancel">Cancel</span>
                            </button>
                        </>
                    )}
                </div>
            </form>
        </main>
    );
}

export default Account;
