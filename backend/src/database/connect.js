import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

export const configDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Successfully connected to the database: ${conn.connection.host}`);
    }
    catch (error){
        console.log("Failed to connect to the database\n ",error);
        process.exit(1)

    }
};
