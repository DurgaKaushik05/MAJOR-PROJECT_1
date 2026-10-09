
require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

async function seedAtlas() {
    try {
        if (!process.env.ATLASDB_URL) {
            throw new Error("ATLASDB_URL .env not found!");
        }

        await mongoose.connect(process.env.ATLASDB_URL);
        console.log("Connected to MongoDB Atlas");

        let added = 0;
        let skipped = 0;

        for (const item of initData.data) {
            const existingListing = await Listing.findOne({
                title: item.title,
                location: item.location,
                country: item.country,
            });

            if (existingListing) {
                skipped++;
                continue;
            }

            await Listing.create(item);
            added++;
        }

        console.log(`New sample listings added: ${added}`);
        console.log(`Existing listings skipped: ${skipped}`);
        console.log("Seeding completed successfully.");
    } catch (error) {
        console.error("Seeding failed:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedAtlas();