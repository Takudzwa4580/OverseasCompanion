const express = require("express");
const { Router } = require("express");
const router = Router();


//Submit applications
router.post("/submit", async (req, res) => {});

// Get user applications
router.get("/user/:userId", async (req, res) => {});

module.exports = router;
