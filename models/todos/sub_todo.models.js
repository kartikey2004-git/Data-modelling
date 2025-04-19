import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    // check mark this subTodo is completed or not

    complete: {
      type: Boolean,
      default: false,
    },

    // kisi ke bhi Todo ke andar ke subTodo konse user ne banaye h

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);

// mongoose documents relation not like mySQL ( one to many , many to many )
