const express = require("express");
const rateLimitMiddleware = require("./middlewares/rateLimit");
const app = express();

app.use(rateLimitMiddleware);

app.get("/api/ratelimit", (req, res) => {
  res.send({
    success: true,
    message: "Basic implementation of Rate Limit using Leaky Bucket Algo 🎉",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
