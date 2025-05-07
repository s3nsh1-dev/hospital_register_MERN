import { RequestHandler } from "express";
import Patient from "../../models/patient.model";

const addPatient: RequestHandler = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newPatient = await Patient.create({ name, age });
    res.status(201).json({ message: "Patient created", patient: newPatient });
  } catch (error) {
    res.status(500).json({ message: "Error creating patient", error });
  }
};

export default addPatient;
