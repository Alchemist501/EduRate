const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const authRouter = require('./routers/authRouters');
const viewRouter = require('./routers/viewRouter');
// const reviewRouter = require('./routers/reviewRouter');
// const db = require('./db');
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// Load environment variables from .env file
dotenv.config({ path: './config.env' });
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '10kb' }));
app.use('/',viewRouter);
app.use('/users',authRouter);
// app.use('/',reviewRouter);
// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});