import { RequestHandler, Request, Response } from "express";
import Patient from "../../models/patient.model";

// PATCH/PUT endpoints (to be implemented)
const updatePatient: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { _id, editedPatient } = req.body;
    if (!editedPatient) {
      res
        .status(400)
        .json({ message: `Missing required editedPatient:${editedPatient}` });
      return;
    }
    if (!_id) {
      res.status(400).json({ message: `Missing required _id: ${_id}` });
      return;
    }
    const updatedPatient = await Patient.findByIdAndUpdate(_id, editedPatient, {
      new: true, // return the updated doc
      runValidators: true, // enforce schema validation
    });
    if (!updatedPatient) {
      res.status(404).json({ message: `Patient with Id(${_id}) not found` });
      return;
    }
    res
      .status(200)
      .json({ message: "SUCCESSFULLY UPDATED", body: updatePatient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while updating patient", error });
  }
};

export default updatePatient;
