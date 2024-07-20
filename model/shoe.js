const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  NameShoe: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Sizes: {
    type: [Number],
    required: true,
  },
});

let Shoe = mongoose.model("Shoe", shoeSchema);
module.exports = { Shoe };
