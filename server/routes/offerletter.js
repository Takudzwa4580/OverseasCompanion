const express = require("express");
const router = express.Router();
const { OfferLetter } = require("../db");

//Submit applications
router.post('/issue', async (req, res) => {});

// Get user applications
router.get('/user/:userId', async (req, res) => {});

module.exports = router;
