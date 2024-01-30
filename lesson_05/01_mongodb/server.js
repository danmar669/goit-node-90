const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST, DB_ADMIN_NAME, DB_ADMIN_PASSWORD, DB_CLUSTER_NAME } = process.env;

const DB_HOST_NEW = `mongodb+srv://${DB_ADMIN_NAME}:${DB_ADMIN_PASSWORD}@${DB_CLUSTER_NAME}.wg3mu4q.mongodb.net`;

mongoose
    .connect(DB_HOST_NEW)
    .then(() => console.log("DB connected"))
    .catch((err) => {
        console.error(err.message)
        process.exit(1)
    });
