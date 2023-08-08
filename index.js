const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const clientIpAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(`The client IP address is: ${clientIpAddress}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
