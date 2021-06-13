const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extrended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(require('./routes/api-routes.js')); 
app.use(require('./routes/html-routes.js')); 

app.listen(PORT, () => {
    console.log('App running on port ${PORT}'); 
})