const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/patients", require("./routes/patientRoutes"));
app.use("/api/visits", require("./routes/visitRoutes"));
app.use("/api/prescriptions", require("./routes/prescriptionRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

