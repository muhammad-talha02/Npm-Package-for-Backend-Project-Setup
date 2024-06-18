import mongoose from "mongoose";
import 'dotenv/config'

const dbUrl = process.env.DB_URL || ''


const connecDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data)=>{
            console.log(`Databasd Connected with ${data.connection.host}`)
        })
    } catch (error) {
        console.log(`Error to connect database ${error.message}`)
        console.log(`Please check URL in Env File`)
    }
}


export default connecDB;