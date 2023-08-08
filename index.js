const express = require('express');
const app = express();

app.set('trust proxy', true); // Enable proxy trust

app.get('/', (req, res) => {
  // Retrieve full client IP address from remote address
  const remoteAddress = req.connection.remoteAddress;

  // Extract the IPv4 address if it's an IPv6-mapped IPv4 address
  const ipv4Address = remoteAddress.includes('::ffff:')
    ? remoteAddress.split('::ffff:')[1]
    : remoteAddress;

  res.send(`The client IPv4 address is: ${ipv4Address}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
