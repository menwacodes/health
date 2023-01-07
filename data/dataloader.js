const fs = require("fs");
const connect = require("./../serverGen.js");
const Cardio = require("./../models/cardioModel.js");
const c = require("ansi-colors");

connect();

const exercises = JSON.parse(fs.readFileSync("./data/cardio.json", "utf-8"));
const importData = async () => {
    try {
        await Cardio.create(exercises);
        console.log(c.bgGreen.black("Data Successfully Loaded"));
    } catch (error) {
        console.error(error);
    }
    process.exit();
};

const deleteData = async () => {
    try {
        await Cardio.deleteMany();
        console.log(c.bgRed.yellowBright("Data Successfully Deleted"));
    } catch (error) {
        console.error(error);
    }
    process.exit()
};

process.argv[2] === '--import' && importData();
process.argv[2] === '--delete' && deleteData();
