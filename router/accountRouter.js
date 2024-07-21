const AccountController = require("../controller/accountController")
const router = require("express").Router();

router.get("/",AccountController.getAllAccount);
router.post("/",AccountController.postAccount);
router.get("/:email",AccountController.getAccount);

module.exports = router;