const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Member = require("./models/Member");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ MongoDB Error:", err));

// Home Route
app.get("/", (req, res) => {
    res.send("HR Fitness Backend Running 🚀");
});

// Add Member Route
app.post("/admission", async (req, res) => {
    try {
        const member = new Member(req.body);
        await member.save();

        res.status(201).json({
            success: true,
            message: "Admission Successful",
            data: member
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Get All Members
app.get("/members", async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running on Port ${PORT}`);
});