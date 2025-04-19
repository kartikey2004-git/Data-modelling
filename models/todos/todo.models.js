import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    // when all the subtodos completed , it marks true

    complete: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Array of Sub-Todos

    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);

/* models Relation : Todo Created by which user  toh do cheezein chahiye hoti h : type and ref 

type:mongoose.Schema.Types.ObjectId se humare schema ko pta chal jaata h ki kisi aur model ko reference krna h

*/
