const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const Shoe = require("./router/shoeRouter");
const Brand = require("./router/brandRouter");
const Account = require("./router/accountRouter");
const Order = require("./router/orderRouter");
export const maxDuration = 30000;
dotenv.config();
// Kết nối CSDL
async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (err) {
    console.log("Lỗi kết nối CSDL", err);
  }
}
ConnectDB();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// Routes
app.use("/shoe", Shoe);
app.use("/brand", Brand);
app.use("/account", Account);
app.use("/order", Order);

app.get("/", (req, res) => {
  res.status(200).json("API Data Shoe");
});

//
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
