const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
  },
  { collection: 'TEST' }
);

const Student = mongoose.model('Student', studentSchema);

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = Student;
