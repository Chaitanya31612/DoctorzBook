const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

require("dotenv").config();

const indexRoutes = require("./routes/index.routes");
const { ValidationError } = require("express-validation");

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGO_URL,
  {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (!error) {
      console.log("MongoDb Connection: ", process.env.MONGO_URL);
    } else {
      console.log("database not working");
    }
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api", indexRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
