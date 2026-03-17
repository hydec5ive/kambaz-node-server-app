var express = require('express');
var app = express();

app.get('/hello', (req, res) => 
  res.send('Hello World!')
);

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
