import app from './app.js';
import dotenv from 'dotenv';
import {configDB} from './database/connect.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

configDB().then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
);


