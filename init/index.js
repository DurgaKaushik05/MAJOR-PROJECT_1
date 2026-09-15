const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { object } = require("joi");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
        initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});

    const dataWithOwner = initData.data.map((obj) => ({
        ...obj,
        owner: "6a9da324a423698c9b30b449",
    }));
    await Listing.insertMany(dataWithOwner);
    console.log("data was initialized");
    mongoose.connection.close();
};
