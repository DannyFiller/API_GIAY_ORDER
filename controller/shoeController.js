const { Shoe } = require("../model/shoe");

const ShoeController = {
  getAllShoe: async (req, res) => {
    try {
      const shoes = await Shoe.find().populate("Brand");
      res.status(200).json(shoes);
    } catch (e) {
      res.status(500).json(e);
    }
  },

  postShoe: async (req, res) => {
    try {
      const newShoe = new Shoe(req.body);
      const saveShoe = await newShoe.save();
      res.status(200).json(saveShoe);
    } catch (e) {
      res.status(500).json(e);
    }
  },

  editShoe: async (req, res) => {
    try {
      const shoeUpdate = await Shoe.findById(req.params.id);
      await shoeUpdate.updateOne({ $set: req.body });
      res.status(200).json(shoeUpdate);
    } catch (error) {
      res.status(200).json(error);
    }
  },

  deleteShoe: async (req, res) => {
    try {
      const delShoe = await Shoe.findByIdAndDelete(req.params.id);
      res.status(200).json(delShoe);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = ShoeController;
