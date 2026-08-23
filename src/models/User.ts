import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String }, // optional for now if using OAuth later
    role: { type: String, enum: ["CUSTOMER", "ADMIN"], default: "CUSTOMER" },
    phone: { type: String },
    shippingAddress: {
      street: String,
      city: String,
      zip: String,
      country: String,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
