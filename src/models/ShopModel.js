const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    shopName: { type: String, unique: true },
    domainName: { type: String, unique: true },
    userId: { type: String, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const UserModel = mongoose.model("user", DataSchema);
module.exports = UserModel;
