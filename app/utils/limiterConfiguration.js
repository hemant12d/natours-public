const rateLimit = require('express-rate-limit');

const limiter = rateLimit(
    {
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP, Please try after one hour !"
    }
);

module.exports = limiter;