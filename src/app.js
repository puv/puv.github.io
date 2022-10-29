require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

// Routes
const indexRoute = require("./routes/index");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set("trust proxy", true);

// Middleware Routes
app.use("/", indexRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});