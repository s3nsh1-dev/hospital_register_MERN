import { RequestHandler } from "express";
import Illness from "../../models/illness.model";
import Patient from "../../models/patient.model";

const addIllness: RequestHandler = async (req, res) => {
  try {
    const { type, patientId } = req.body;
    const newIllness = await Illness.create({ type, patient: patientId });

    // Add the illness to the patient's illnesses array
    await Patient.findByIdAndUpdate(patientId, {
      $push: { illnesses: newIllness._id },
    });

    res.status(201).json({ message: "Illness added", illness: newIllness });
  } catch (error) {
    res.status(500).json({ message: "Error adding illness", error });
  }
};

export default addIllness;
