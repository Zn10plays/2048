const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.listen(80, () => console.log(`Server is up on port ${80}`))