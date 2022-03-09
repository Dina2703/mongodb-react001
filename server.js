const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
// const mongoose = require("mongoose");

app.use(cors());
app.use(express.json()); //to parse the request coming from the frontend

//connect to mongoose
mongoose.connect(
  "mongodb+srv://Dina:Alaniko0731!@cluster0.xbjwj.mongodb.net/notesDB"
);

//require route
app.use("/", require("./routes/noteRoute"));

app.listen(8000, function () {
  console.log("express server is running");
});
