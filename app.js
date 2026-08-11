const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('歡迎來到我的個人網誌');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});