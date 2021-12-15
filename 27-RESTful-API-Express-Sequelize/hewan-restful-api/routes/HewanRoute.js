const express = require("express");
const router = express.Router();

const HewanController = require("../controllers/HewanController");

router.get("/", HewanController.getAllHewan);
router.get("/:id", HewanController.getHewanById);
router.post("/", HewanController.createHewan);
router.put("/:id", HewanController.updateHewan);
router.delete("/:id", HewanController.deleteHewan);

module.exports = router;
