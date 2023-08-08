const express = require('express');
const app = express();

app.set('trust proxy', true); // Enable proxy trust

app.get('/', (req, res) => {
  const forwardedFor = req.headers['x-forwarded-for'];

  // If the forwardedFor header is present and contains a comma
  if (forwardedFor && forwardedFor.includes(',')) {
    const clientIpAddress = forwardedFor.split(',')[0].trim();
    res.send(`The client IP address is: ${clientIpAddress}`);
  } else {
    const clientIpAddress = forwardedFor || req.connection.remoteAddress;
    res.send(`The client IP address is: ${clientIpAddress}`);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
