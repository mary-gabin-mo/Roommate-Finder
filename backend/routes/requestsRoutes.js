import express from "express";

const router = express.Router();

// send message requests
router.post("/send", async (req, res) => {
    const { receiver_ID, sender_ID, description } = req.body;

    // hard code
    //const receiver_ID = 2;
    //const sender_ID = 1;
    //const description = "This is a test request description";

    try {
        console.log("Starting the /send endpoint...");
        console.log(`receiver_ID: ${receiver_ID}, sender_ID: ${sender_ID}, description: ${description}`);

        const statusQuery = `
        INSERT INTO Status (status_context, status_name, description, created_date, last_updated)
        VALUES ('Roommate Request', 'Pending', ?, CURRENT_DATE, CURRENT_DATE);
        `;
        
        req.db.query(statusQuery, [description], (err, statusResult) => {
            if (err) {
                return res.status(500).json({ error: "Error inserting into Status", details: err.message });
            }
            
            const status_ID = statusResult.insertId;

            const requestQuery = `
            INSERT INTO RoommateRequest (receiver_ID, sender_ID, status_ID)
            VALUES (?, ?, ?);
            `;

            req.db.query(requestQuery, [receiver_ID, sender_ID, status_ID], (err, requestResult) => {
                if (err) {
                    return res.status(500).json({ error: "Error inserting into RoommateRequest", details: err.message });
                }

                return res.json({
                    message: "Test request inserted successfully",
                    status_ID,
                });
            });
        });
    } catch (err) {
        console.error("Unexpected server error:", err);
        return res.status(500).json({ error: "Unexpected server error", details: err.message });
    }
});


export default router