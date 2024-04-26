const express = require('express');
const app = express();
const db = require('./models/StudentModel');
// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});