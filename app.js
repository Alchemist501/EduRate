const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const authRouter = require('./routers/authRouters');
const reviewRouter = require('./routers/reviewRouter');
// const db = require('./db');
const app = express();
// Load environment variables from .env file
dotenv.config({ path: './config.env' });
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '10kb' }));
app.use('/users',authRouter);
app.use('/',reviewRouter);
// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});