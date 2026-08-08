const mongoose = require("mongoose");
//validation layers - frontend, express, backend(express validator, controller or services, schema level)
const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
    },
    followee: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: {
        values: ["pending", "accepted", "rejected"],
        message: "status can only be pending, accepted or rejected",
      },
    },
  },
  {
    timestamps: true,
  },
);

followSchema.index({ follower: 1, followee: 1 }, { unique: true }); // Create a unique index on the combination of follower and followee

const followModel = mongoose.model("Follow", followSchema);

module.exports = followModel;
