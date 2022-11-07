const express = require("express");
const router = express.Router();

const pageController = require("../controllers/pageController");

router.route("/").get(pageController.getIndexPage);

module.exports = router;