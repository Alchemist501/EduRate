const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routers/authRouters');
// const db = require('./db');
const app = express();
// Load environment variables from .env file
dotenv.config({ path: './config.env' });
app.use('/',authRouter);
// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});