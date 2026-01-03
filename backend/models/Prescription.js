const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
  prescription_id: { type: String, unique: true },
  visit_id: String,
  patient_id: String,
  diagnosis_id: String,
  diagnosis_description: String,
  drug_name: String,
  dosage: Number,
  quantity: Number,
  days_supply: Number,
  prescribed_date: Date,
  cost: Number,
  doctor_name: String
});

module.exports = mongoose.model("Prescription", PrescriptionSchema);
