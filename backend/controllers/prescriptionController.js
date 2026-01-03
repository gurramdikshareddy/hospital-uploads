const Prescription = require("../models/Prescription");
const Visit = require("../models/Visit");

exports.addPrescription = async (req, res) => {
  const visit = await Visit.findOne({ visit_id: req.body.visit_id });

  if (!visit) {
    return res.status(400).json({ error: "Visit does not exist" });
  }

  const prescription = await Prescription.create(req.body);
  res.json({ success: true, prescription });
};
