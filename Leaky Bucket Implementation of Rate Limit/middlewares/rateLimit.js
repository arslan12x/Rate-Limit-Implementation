class LeakyBucket {
  constructor(capacity, leakRate) {
    this.capacity = capacity;
    this.leakRate = leakRate;
    this.tokens = 0;
    this.lastChecked = Date.now();
  }

  addToken() {
    const now = Date.now();
    const timePassed = now - this.lastChecked;

    const leakedTokens = timePassed * this.leakRate;
    this.tokens = Math.max(this.tokens - leakedTokens, 0);
    this.lastChecked = now;

    if (this.tokens < this.capacity) {
      this.tokens++;
      return true;
    }
    return false;
  }
}

function rateLimitMiddleware(bucket) {
  return (req, res, next) => {
    if (bucket.addToken()) {
      next();
    } else {
      res.status(429).send("You have exceeded your 5 requests per minute limit.");
    }
  };
}

module.exports = {
  LeakyBucket,
  rateLimitMiddleware
};
