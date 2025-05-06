import { RequestHandler, Request, Response } from "express";
import Patient from "../../models/patient.model";

const updatePatientUsername: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { _id, name } = req.body;
    if (!_id || !name) {
      res.status(400).json({ message: "Either _id or name not found" });
      return;
    }
    const updateUserName = await Patient.findOneAndUpdate(
      { _id },
      { $set: { name } },
      { new: true, runValidators: true }
    );

    if (!updateUserName) {
      res.status(404).json({ message: `Patient with name(${name}) not found` });
      return;
    }
    res
      .status(200)
      .json({ message: `New Name Update to ${name}`, body: updateUserName });
  } catch (error) {
    res.status(500).json({
      message: "Server Request Went wrong when updating patient name",
    });
  }
};

export default updatePatientUsername;
