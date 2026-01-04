const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const Patient = require("../models/Patient");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

/* Manual Add */
router.post("/add", async (req, res) => {
  try {
    await Patient.create(req.body);
    res.json({ message: "Patient added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* CSV Upload */
router.post("/upload", upload.single("file"), (req, res) => {
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      await Patient.insertMany(results);
      fs.unlinkSync(req.file.path);
      res.json({ message: "Patients uploaded successfully" });
    });
});

module.exports = router;
