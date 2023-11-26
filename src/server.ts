import app from "./app";
import config from "./app/config";
import mongoose from 'mongoose';
const port = 3000

async function main() {
    try {
        await mongoose.connect(config.database_uri as string);
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

main()