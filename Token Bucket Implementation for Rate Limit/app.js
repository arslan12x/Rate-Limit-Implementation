const express = require('express');
const app = express();

app.use((req, res, next) => {
  const remainingRequests = limiter.tryRemoveTokens(1);

  if (!remainingRequests) {
    res.status(429).send('You have exceeded your 5 requests per minute limit.');
  } else {
    next();
  }
});

app.get("/api/ratelimit", (req, res) => {
  res.send({
    success: true,
    message:  "Basic implementation of Rate Limit using Token Bucket Algo 🎉",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
