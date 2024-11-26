import express from "express";

const router = express.Router();

// send message 
router.post("/sendMessage", async (req, res) => {
    const { sender_ID, receiver_ID, content } = req.body;

    try {
        const messageQuery = `
        INSERT INTO Message (sender_ID, receiver_ID, content, time_stamp)
        VALUES (?, ?, ?, CURRENT_TIMESTAMP);
        `;

        req.db.query(messageQuery, [sender_ID, receiver_ID, content], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Error sending message", details: err.message });
            }

            res.status(201).json({
                message: "Message sent successfully",
                message_ID: result.insertId,
            });
        });
    } catch (err) {
        res.status(500).json({ error: "Unexpected server error", details: err.message });
    }
});

// get chat between two users
router.get("/chat", async (req, res) => {
    const { user1_ID, user2_ID} = req.query; 

    try {
        const chatQuery = `
        SELECT M.message_ID, M.sender_ID, M.receiver_ID, M.content, M.time_stamp
        FROM Message AS M
        WHERE (M.receiver_ID = ? AND M.sender_ID = ?)
        OR (M.receiver_ID = ? AND M.sender_ID = ?)
        ORDER BY M.time_stamp DESC;
        `;

        req.db.query(chatQuery, [user1_ID, user2_ID, user2_ID, user1_ID], (err, results) => {
            if (err) {
                return res.status(500).json({ error: "Error fetching chat", details: err.message });
            }

            res.json(results);
        });
    } catch (err) {
        res.status(500).json({ error: "Unexpected server error", details: err.message });
    }
});

export default router