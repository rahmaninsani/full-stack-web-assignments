const express = require("express");
const router = express.Router();

const hewanRoutes = require("./HewanRoute");

router.use("/hewan", hewanRoutes);

module.exports = router;
