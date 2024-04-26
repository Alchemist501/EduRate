const express = require('express');
const db = require('./models/StudentModel')
const authRouter = require('./routers/authRouters');
const app = express();
app.use('/',authRouter);
// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});