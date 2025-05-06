import { RequestHandler, Request, Response } from "express";
import { IllnessType } from "../../constants/commonTypes";
import Illness from "../../models/illness.model";
const addIllness: RequestHandler = async (req: Request, res: Response) => {
  try {
    // this form of taking request body insures that TS will check its type is illness or not, else throw error
    const result = { ...req.body };
    if (!result) {
      res.status(404).json({ message: "new Illness not found" });
      return;
    }
    const createStory: IllnessType = await Illness.create(result);
    if (!createStory) {
      res.status(400).json({ message: "Can not post Illness" });
      return;
    }
    res.status(201).json({ message: "Illness Posted", body: createStory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching patients", error });
  }
};

export default addIllness;
