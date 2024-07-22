const {Order} = require("../model/order");

const OrderController ={

    getAllOrder: async(req,res) =>{
        try{
            const orders = await Order.find().populate("Items.Shoe");
            res.status(200).json(orders);
        }catch (err){
            res.status(500).json(err);
        }
    },

    getOrderByEmail: async(req,res) =>{
        try {
            const order = await Order.find({ Email: req.params.email }).populate("Items.Shoe");
            if (order) {
              res.status(200).json(order);
            } else {
              res.status(404).json({ message: 'order not found' });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    },

    postOder: async(req,res) =>{
        try {
            const newOrder = new Order(req.body);
            const saveOrder = await newOrder.save();
            res.status(200).json(saveOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = OrderController;