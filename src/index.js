const cors = require("cors")
const express = require("express")

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Staging!');
});

app.listen(8000, () =>
  console.log(`Example app listening on port 8000!`),
);