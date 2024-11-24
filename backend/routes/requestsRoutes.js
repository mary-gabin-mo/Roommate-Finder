import express from "express";

const router = express.Router();

// send message requests
router.post("/send", async (req, res) => {
    //const { receiver_ID, sender_ID, description } = req.body;
    // for testing
    const receiver_ID = 2;
    const sender_ID = 1;
    const description = "This is a test request description";

    try {
        const statusQuery = `
        INSERT INTO Status (status_context, status_name, description, created_date, last_updated)
        VALUES ('Roommate Request', 'Pending', ?, CURRENT_DATE, CURRENT_DATE);
        `;

        db.query(statusQuery, [description], (err, statusResult) => {
            if (err) {
                console.error("Error inserting into Status:", err);
                return res.json(err);
            }

            const status_ID = statusResult.insertId; 

            const requestQuery = `
            INSERT INTO RoommateRequest (receiver_ID, sender_ID, status_ID)
            VALUES (?, ?, ?);
            `;

            db.query(requestQuery, [receiver_ID, sender_ID, status_ID], (err, requestResult) => {
                if (err) {
                    console.error("Error inserting into RoommateRequest:", err);
                    return res.json(err);
                }

                return res.json({
                    message: "Test request inserted successfully",
                    status_ID,
                });
            });
        });
    } catch (err) {
        console.error("Unexpected server error:", err);
        return res.status(500).json(err);
    }
});

// accept message request
//export const acceptRequests

export default router