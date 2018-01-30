const path = require('path');
const express = require('express');

// CONSTANT
const PUBLIC_PATH = path.join(__dirname, '../public')
const PORT = process.env.PORT || 3000;

let app = express();

app.use(express.static(PUBLIC_PATH));

app.listen(3000, () => {
    console.log(`Server is listinig on port: ${PORT}`);
});