import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);

// further we study how validation works in mongoose , custom mongoose validation ,  documents , models , concept of subdocument
