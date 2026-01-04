const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const Visit = require("../models/Visit");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/add", async (req, res) => {
  try {
    await Visit.create(req.body);
    res.json({ message: "Visit added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/upload", upload.single("file"), (req, res) => {
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      await Visit.insertMany(results);
      fs.unlinkSync(req.file.path);
      res.json({ message: "Visits uploaded successfully" });
    });
});

module.exports = router;
