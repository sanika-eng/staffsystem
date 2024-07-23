const mongoose = require('mongoose');

// Define the schema for the staff members
const StaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

// Create and export the Staff model based on the schema
module.exports = mongoose.model('Staff', StaffSchema);
