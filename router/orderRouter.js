const OrderController = require("../controller/orderController");
const router = require("express").Router();

router.get("/",OrderController.getAllOrder);
router.get("/:email",OrderController.getOrderByEmail);
router.post("/",OrderController.postOder);
// router.put("/:id",ShoeController.editShoe);
// router.delete("/:id",ShoeController.deleteShoe);

module.exports = router;