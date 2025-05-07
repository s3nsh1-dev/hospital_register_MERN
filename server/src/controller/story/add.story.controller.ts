import { RequestHandler } from "express";
import Story from "../../models/story.model";
import Patient from "../../models/patient.model";

const addStory: RequestHandler = async (req, res) => {
  try {
    const { summary, patientId } = req.body;
    const newStory = await Story.create({ summary, patient: patientId });

    // Add the story to the patient
    await Patient.findByIdAndUpdate(patientId, { story: newStory._id });

    res.status(201).json({ message: "Story added", story: newStory });
  } catch (error) {
    res.status(500).json({ message: "Error adding story", error });
  }
};

export default addStory;
