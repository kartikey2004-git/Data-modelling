import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);



// hum images mongoDB mein bhi rkh skte h buffer format ( images , pdf etc ) mein

// inko usually rkha jata khud hi ke server pe, alag folder ke andar rkha jata h , uss folder ka public url liya jata h

// ya phird third party services jaise AWS bucket mein image upload krdi and uska SDK response mein ( jo hum api se baat krte h ) wo URL dedeta h public usko hum database mein store krlete h

// cloudinary : upload videos and photos aur wo response mein url dedeta h and hum uss URL ko store krate h


// jaise kabhi ho skta h hum cloudinary se hum multiple variant , like jaise youTube ki Api thumbnail kaafi formats mein deti h (1x , 2x , 3x ) toh uss case mein type : Array bnana h and uske andar multiple object with type: string





// SDK (Software Development Kit) kya hota h?

/* 
SDK (Software Development Kit) is like a ready-made toolkit that helps you build apps or software faster.


Imagine you're making a pizza 🍕. An SDK gives you the dough, sauce, and cheese, so you don’t have to make everything from scratch. 

What's inside an SDK?

Code libraries (pre-written functions)
Tools (to test, debug, build)
Docs (to help you understand how to use it)

Firebase SDK
Supabase SDK (JavaScript)

*/