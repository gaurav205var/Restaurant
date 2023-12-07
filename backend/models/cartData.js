const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    // user_id: {
    //   type:mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref:"User",
    // },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      default: "order placed",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
