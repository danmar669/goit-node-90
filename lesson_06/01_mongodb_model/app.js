const express = require("express");
const booksRouter = require("./routers/api/books");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const { DB_HOST } = process.env;

const app = express();

app.use(express.json());

app.use("/api/books", booksRouter);

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

mongoose
    .connect(DB_HOST)
    .then(() => console.log("DB connected"))
    .then(() => app.listen(3000, () => console.log("Server running")))
    .catch((err) => {
        console.error(err.message)
        process.exit(1)
    });
