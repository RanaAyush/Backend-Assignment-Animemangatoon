const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const webtoonRoutes = require('./routes/webtoonRoutes');
const rateLimit = require('express-rate-limit'); 

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 100,
    message: "Request Limit reached from this IP....Please Try after 1hr."
});
app.use(limiter);

app.use('/api/webtoons', webtoonRoutes);

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
