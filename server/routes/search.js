const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const { getArtist } = require("../controllers/artistController");

// search for artist

router.get("/artist/:name", getArtist);

module.exports = router;
