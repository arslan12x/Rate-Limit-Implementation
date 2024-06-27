const { RateLimiter } = require('limiter');

const limiter = new RateLimiter({ tokensPerInterval: 5, interval: 15 * 60 * 1000 });