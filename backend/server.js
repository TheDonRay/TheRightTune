require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Successfully running on http://localhost:${PORT}`);
});
