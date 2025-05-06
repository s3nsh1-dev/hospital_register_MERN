import { RequestHandler, Request, Response } from "express";
import Patient from "../../models/patient.model";
import { PatientType } from "../../constants/commonTypes";

const addPatient: RequestHandler = async (req: Request, res: Response) => {
  try {
    const newPatient: PatientType = {
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

export default addPatient;
