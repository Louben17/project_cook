const Mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connectToDatabase(URL) {
    try {
        await Mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,


        });
        console.log("Uspesne prihlaseni k databazi");
    } catch (error) {
        console.error("K databazi nelze pripojit", error);
    }
}

module.exports = connectToDatabase;
