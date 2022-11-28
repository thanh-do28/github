const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cardRoutes = require("./routes/card.routes")
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const cors = require('cors')
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ message: "hello" });
  });


app.use("/api/v1/card", cardRoutes);


app.listen(3000, () => {
    console.log("Server is running on http://127.0.0.1:3000");
  });