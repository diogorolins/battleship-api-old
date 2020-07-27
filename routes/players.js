const express = require("express");
const router = express.Router();
const PlayerController = require("../controllers/Player-controller");
const authMiddleware = require("../middlewares/auth");

router.get("/", authMiddleware, PlayerController.showAllPlayers());
router.post("/", PlayerController.createPlayer());
router.get("/:id", authMiddleware, PlayerController.showPlayerById());

module.exports = router;
