const Visit = require("../models/Visit");
const Patient = require("../models/Patient");

exports.addVisit = async (req, res) => {
  const patient = await Patient.findOne({ patient_id: req.body.patient_id });

  if (!patient) {
    return res.status(400).json({ error: "Patient does not exist" });
  }

  const visit = await Visit.create(req.body);
  res.json({ success: true, visit });
};
