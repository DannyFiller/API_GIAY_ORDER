const BrandController = require("../controller/brandController");
const router = require("express").Router();

router.post("/", BrandController.postBrand);
router.get("/", BrandController.getAllBrand);
module.exports = router;
