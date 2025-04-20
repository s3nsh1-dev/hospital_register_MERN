import { RequestHandler, Request, Response } from "express";
import Patient from "../models/patient.model";
import { PatientType } from "../constants/commonTypes";
import mongoose from "mongoose";

export const fetchPatients: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const patientList: PatientType[] = await Patient.find({});
  try {
    if (!patientList) {
      res.status(400).json({ message: "Patient not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "SUCCESSFULLY FETCHED", body: patientList });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching patients", error });
  }
};

export const addPatient: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const newPatient: PatientType = {
      //   _id: crypto.randomUUID(),
      ...req.body,
    };
    if (!newPatient.name || !newPatient.age) {
      res
        .status(422)
        .json({ message: "Missing required patient fields: name or age" });
      return;
    }
    const createdPatient = await Patient.create(newPatient);
    res.status(201).json({ message: "Patient Added", body: createdPatient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while adding patient", error });
  }
};

export const deletePatient: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      res.status(400).json({ message: `Id(${_id}) does not exist` });
      return;
    }
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(400).json({ message: "Invalid MongoDB ObjectId format" });
      return;
    }
    const deleted = await Patient.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(_id as string),
    });
    if (!deleted) {
      res.status(404).json({ message: `Patient with ID(${_id}) not found` });
      return;
    }
    res.status(200).json({ message: "Patient Deleted", body: deleted });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while deleting patient", error });
  }
};

// PATCH/PUT endpoints (to be implemented)
export const updatePatient: RequestHandler = (req: Request, res: Response) => {
  res.status(501).json({ message: "updatePatient not implemented yet" });
};

export const updatePatientUsername: RequestHandler = (
  req: Request,
  res: Response
) => {
  res
    .status(501)
    .json({ message: "updatePatientUsername not implemented yet" });
};
