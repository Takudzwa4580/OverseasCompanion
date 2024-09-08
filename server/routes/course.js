const express = require("express");
const router = express.Router();
const { Course} = require("../db");

// Create a new course
router.post('/', async (req, res) => {
 
});

// Get all courses
router.get('/', async (req, res) => {
 
});

// Update a course by ID
router.put('/:id', async (req, res) => {
  
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
 
});

module.exports = router;
