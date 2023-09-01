const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const port = 6969;

const routera = require("./Router");
const database = require("./config/database");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "public")));

dotenv.config();
routera(app);
database.connect();
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
