const Patient = require("../models/Patient");

exports.addPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json({ success: true, patient });
};
