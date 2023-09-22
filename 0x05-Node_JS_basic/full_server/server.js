const express = require('express');

const app = express();
const router = require('./routes/index');

// Use the routes defined in full_server/routes/index.js
app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

// Listen on port 1245
const port = 1245;
app.listen(port, () => {});

export default app;
