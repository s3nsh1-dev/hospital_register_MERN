import { RequestHandler, Request, Response } from "express";
import mongoose from "mongoose";
import Patient from "../models/patient.model";

const deletePatient: RequestHandler = async (req: Request, res: Response) => {
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

export default deletePatient;
