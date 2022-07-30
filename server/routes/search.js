const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

// search for artist

router.get("/artist/:name", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: req.params.name },
    headers: {
      "X-RapidAPI-Key": "2130c8f6c7msh1f292e2b2420a0ep1b215fjsn556d765ad938",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  try {
    const { data } = await axios.request(options);
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
