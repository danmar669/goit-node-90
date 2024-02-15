const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const booksRouter = require("./routers/api/books");
const authRouter = require("./routers/api/auth");
const usersRouter = require("./routers/api/users");

const { DB_HOST } = process.env;

const app = express();

app.use(express.json());

app.use("/api/books", booksRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "Not found",
    });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error", code, name } = err;

    if (name === 'ValidationError') {
        return res.status(400).json({message})
    } 

    if (message.includes('E11000')) {
        return res.status(400).json({message: "Duplicated key!"})
    }
    
    res.status(status).json({ message });
});

module.exports = app