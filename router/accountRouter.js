const AccountController = require("../controller/accountController")
const router = require("express").Router();

router.get("/",AccountController.getAllAccount);
router.post("/",AccountController.postAccount);
router.put("/:id",AccountController.editAcount);

module.exports = router;