import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2";
import cors from "cors";

dotenv.config();
console.log("Database Host:", process.env.MYSQL_ADDON_HOST);

const app = express();

const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to the MySQL database!");
});

app.use(cors())

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/users", (req, res) => {
  const q = "SELECT * FROM User";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
