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