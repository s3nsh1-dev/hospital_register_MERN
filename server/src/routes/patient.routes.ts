import express from "express";
import fetchPatients from "../controller/patient/get.patients.controller";
import addPatient from "../controller/patient/add.patient.controller";
import deletePatient from "../controller/patient/delete.patient.controller";
import updatePatient from "../controller/patient/update.patient.controller";
import updatePatientUsername from "../controller/patient/updateName.patient.controller";

const patientRouter = express.Router();

patientRouter.get("/", fetchPatients);
patientRouter.post("/add", addPatient);
patientRouter.delete("/delete", deletePatient);
patientRouter.put("/update", updatePatient);
patientRouter.patch("/patch", updatePatientUsername);

export default patientRouter;
