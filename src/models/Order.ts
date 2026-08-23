import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["PENDIENTE", "PAGADO", "ENVIADO", "ENTREGADO"],
      default: "PENDIENTE",
    },
    shippingAddress: {
      street: String,
      city: String,
      zip: String,
      country: String,
    },
    paymentMethod: { type: String },
  },
  { timestamps: true }
);

const Order = models.Order || model("Order", OrderSchema);

export default Order;
