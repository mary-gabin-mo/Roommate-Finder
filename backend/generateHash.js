import bcrypt from "bcrypt";

// to convert passwords to hash for our already made profiles

// admin@example.com adminpassword
// john@example.com user1password
// jane@example.com user2password 
// alex@example.com user3password
// emily@example.com user4password

const password = "user4password"; // replace with the password you want to hash

(async () => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);
  } catch (err) {
    console.error("Error hashing password:", err);
  }
})();
