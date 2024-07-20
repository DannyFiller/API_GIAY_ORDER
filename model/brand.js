const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});
let Brand = mongoose.model("Brand", brandSchema);
module.exports = { Brand };
