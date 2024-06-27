const express = require('express');
const { LeakyBucket, rateLimitMiddleware } = require('./middlewares/rateLimit');

const app = express();
const bucket = new LeakyBucket(5, 5 / (15 * 60 * 1000)); 

app.use(rateLimitMiddleware(bucket));

app.get("/api/ratelimit", (req, res) => {
    res.send({
      success: true,
      message: "Implementation of Rate Limit using Leaky Bucket Algo 🎉",
    });
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });