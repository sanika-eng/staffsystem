const express = require('express');
const Staff = require('../models/Staff');

const router = express.Router();

// Get all staff members
router.get('/', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new staff member
router.post('/', async (req, res) => {
  const newStaff = new Staff(req.body);
  try {
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a staff member by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStaff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json(updatedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a staff member by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
    if (!deletedStaff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json({ message: 'Staff member deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
