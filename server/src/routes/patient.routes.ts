import express from "express";
import {
  fetchPatients,
  addPatient,
  deletePatient,
  updatePatient,
  updatePatientUsername,
} from "../controller/patient.controller";

const patientRouter = express.Router();

patientRouter.get("/", fetchPatients);
patientRouter.post("/add", addPatient);
patientRouter.delete("/delete", deletePatient);
patientRouter.put("/update", updatePatient);
patientRouter.patch("/patch", updatePatientUsername);

export default patientRouter;
