const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

exports.getArtist = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: req.params.name },
    headers: {
      "X-RapidAPI-Key": process.env.APIKEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  try {
    const { data } = await axios.request(options);
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
};
