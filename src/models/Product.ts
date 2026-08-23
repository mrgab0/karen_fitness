import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Suplementos", "Ropa", "Implementos", "Belleza"],
    },
    brand: { type: String, default: "Karen Fitness" },
    stock: { type: Number, default: 0 },
    image: { type: String }, 
    variants: [{ type: Schema.Types.Mixed }], 
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
