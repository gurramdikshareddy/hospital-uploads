const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const Prescription = require("../models/Prescription");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

/* =========================
   MANUAL PRESCRIPTION ADD
   ========================= */
router.post("/add", async (req, res) => {
  try {
    const prescription = new Prescription({
      prescription_id: req.body.prescription_id,
      visit_id: req.body.visit_id,
      patient_id: req.body.patient_id,
      drug_name: req.body.drug_name,
      dosage: req.body.dosage,
      quantity: Number(req.body.quantity),
      days_supply: Number(req.body.days_supply),
      prescribed_date: req.body.prescribed_date,
    });

    await prescription.save();
    res.json({ message: "Prescription added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   CSV UPLOAD
   ========================= */
router.post("/upload", upload.single("file"), (req, res) => {
  const prescriptions = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (row) => {
      prescriptions.push({
        prescription_id: row.prescription_id,
        visit_id: row.visit_id,
        patient_id: row.patient_id,
        drug_name: row.drug_name,
        dosage: row.dosage,
        quantity: Number(row.quantity),
        days_supply: Number(row.days_supply),
        prescribed_date: row.prescribed_date,
      });
    })
    .on("end", async () => {
      try {
        await Prescription.insertMany(prescriptions);
        fs.unlinkSync(req.file.path);
        res.json({ message: "Prescriptions uploaded successfully" });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
});

module.exports = router;
