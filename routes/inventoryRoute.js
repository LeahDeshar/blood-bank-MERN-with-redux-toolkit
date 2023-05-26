const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createInventoryController, getInventoryController } = require("../controllers/inventoryController");


const router = express.Router();

// ------------ROUTES------------
router.post("/createInventory",authMiddleware,createInventoryController)

router.get("/getInventory",authMiddleware,getInventoryController)


module.exports = router;