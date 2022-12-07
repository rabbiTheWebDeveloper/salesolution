const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    shopName: { type: String, unique: true },
    domainName: { type: String, unique: true },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: { type: String },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const UserModel = mongoose.model("user", DataSchema);
module.exports = UserModel;
