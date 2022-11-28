const express = require("express");
const router = express.Router();
const cardController = require("../controller/cards.controller")

router.get("/", cardController.getAll);
router.post("/", cardController.create);
router.put("/:id", cardController.updateOne)
router.delete("/:id", cardController.deleteOne);


module.exports = router;