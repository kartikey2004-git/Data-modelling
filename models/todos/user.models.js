import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      // required: [true,"password is required"]
    }
  },{timestamps:true}
)

export const User = mongoose.model("User",userSchema)

// In Mongoose, a schema is a blueprint that defines the structure of documents in MongoDB collections

// A schema defines the shape and organization of data, including fields, their types, validation rules, and default values

// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.

// writing MongoDB validation, casting and business logic boilerplate is a drag