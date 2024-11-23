import express from "express";

const router = express.Router();

// not complete

router.post("/profile", async (req, res) => {
    const {
        user_ID,
        description,
        rentRange,
        cleanliness,
        roomCapacity,
        location,
        noiseTolerance,
        socialHabits,
        sleepSchedule,
    } = req.body;

    try {
        const profileQuery = `INSERT INTO Profile (profile_ID, user_ID, description) VALUES (UUID(), ?, ?)`;
        const [profileResult] = await connection.query(profileQuery, [user_ID, description]);
        const profile_ID = profileResult.insertId; // auto-increment

        const preferenceQuery = `INSERT INTO Preference (preference_ID, profile_ID, user_ID) VALUES (UUID(), ?, ?)`;
        const [preferenceResult] = await connection.query(preferenceQuery, [profile_ID, user_ID]);
        const preference_ID = preferenceResult.insertId; // auto-increment

        const preferenceQueries = [
            rentRange && {
              query: "INSERT INTO RentRange (preference_ID, range) VALUES (?, ?)",
              values: [preferenceId, rentRange],
            },
            cleanliness && {
              query: "INSERT INTO Cleanliness (preference_ID, clean_level) VALUES (?, ?)",
              values: [preferenceId, cleanliness],
            },
            roomCapacity && {
              query: "INSERT INTO RoomCapacity (preference_ID, room_amount) VALUES (?, ?)",
              values: [preferenceId, roomCapacity],
            },
            location && {
              query: "INSERT INTO Location (preference_ID, quadrant) VALUES (?, ?)",
              values: [preferenceId, location],
            },
            noiseTolerance && {
              query: "INSERT INTO NoiseTolerance (preference_ID, tolerance_level) VALUES (?, ?)",
              values: [preferenceId, noiseTolerance],
            },
            socialHabits && {
              query: "INSERT INTO SocialHabits (preference_ID, habits) VALUES (?, ?)",
              values: [preferenceId, socialHabits],
            },
            sleepSchedule && {
              query: "INSERT INTO SleepSchedule (preference_ID, sleep_type) VALUES (?, ?)",
              values: [preferenceId, sleepSchedule],
            },
          ];

        return res.status(200).json({ message: "Profile successfully created" });
    } catch (err) {
        return res.status(500).json(err);
    }
});

export default router;
