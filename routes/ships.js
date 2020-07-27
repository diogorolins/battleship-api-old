const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const ShipController = require("../controllers/Ship-controller");

router.use(authMiddleware);
router.get("/", ShipController.showAllShips());
router.post("/", ShipController.createShip());
router.get("/:id", ShipController.showShipById());

module.exports = router;
