import express from "express";

const router = express.Router();

// not complete
// lets write everything we will do for profile inside here


router.post("/createProfile", async (req, res) => {
    const {
        profile_ID,
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

    const profileQuery = `INSERT INTO Profile (profile_ID, user_ID, description) VALUES (?, ?, ?)`;
    const values = [profile_ID, user_ID, description]

    const preferenceQuery = `INSERT INTO Preference (preference_ID, profile_ID, user_ID) VALUES (?, ?, ?)`;

    const rentQuery = 'INSERT INTO RentRange (preference_ID, range) VALUES (?, ?)';

    const cleanQuery = 'INSERT INTO Cleanliness (preference_ID, clean_level VALUES (?,?)';

    const roomQuery = 'INSERT INTO RoomCapacity (preference_ID, room_amount VALUES (?,?)';

    const locationQuery = 'INSERT INTO Location (preference_ID, quadrant) VALUES (?,?)';

    const noiseQuery = 'INSERT INTO NoiseTolerance (preference_ID, tolerance_level) VALUES (?,?)';

    const socialQuery = 'INSERT INTO SocialHabits (preference_ID, habits) VALUES (?,?)';

    const sleepQuery = 'INSERT INTO SleepSchedule (preference_ID, sleep_type) VALUES (?,?)';

    /*db.profileQuery(profileQuery, [values], (err, data) =>{
      if (err) return res.json(err);
      return res.json("Profile successfully created")
    })*/

});

router.post("/updateProfile", async (req, res) => {

});

export default router;
