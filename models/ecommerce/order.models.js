import mongoose from "mongoose";

// individual orderItem Schema  to define ki konsa product mangaya h aur kitna order mangaya h

// hum productId se reference kr lunga ki konsa product h , kyuki product ka jo schema usme mongoDB se ek unique ID generate hota h ( automatically like ref by _id)

const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },

    // for referencing address , phone number etc for shipping to the customer

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // for storing multiple items of multiple categories

    orderItems: {
      type: [orderItemsSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIEVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);

