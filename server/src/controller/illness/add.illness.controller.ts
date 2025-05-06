import { RequestHandler, Request, Response } from "express";
import { IllnessType } from "../../constants/commonTypes";
import Illness from "../../models/illness.model";

const addIllness: RequestHandler = async (req: Request, res: Response) => {
  try {
    // this form of taking request body insures that TS will check its type is illness or not, else throw error
    const result: IllnessType = { id: crypto.randomUUID(), ...req.body };
    // Validate required fields
    if (
      !result.patient_info ||
      !result.patient_info.name ||
      !result.patient_info.id
    ) {
      res.status(422).json({
        message: "Invalid Illness data: Missing required patient_info fields",
      });
      return;
    }

    const createIllness: IllnessType = await Illness.create(result);
    res.status(201).json({ message: "SUCCESS", body: createIllness });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching patients", error });
  }
};

export default addIllness;
/*
SAMPLE
POST /api/illness/add
{
  "type": ["Diabetes", "Hypertension"],
  "patient_info": {
    "name": "John Doe",
    "id": "12345"
  }
}
*/
