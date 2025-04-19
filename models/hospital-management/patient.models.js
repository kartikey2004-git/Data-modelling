import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    // to find out and say exactly what illness a person has or what the cause of a problem is

    diagnoseWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", " B+", "B-", "O+", "O-", "AB+", "AB-"],
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Doctor", patientSchema);

// but jab ye hum professionally banate h , toh medical field ki reports bhi study krni padti h , kaise records rkh rhe hai
