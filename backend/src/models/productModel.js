import mongoose from "mongoose";

//for create Table into DB for product
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: {
      public_id: { type: String },
      secure_url: { type: String },
    },
    sellerId: { type: String },
    seller: { type: String },
    sellerImage: { type: String },
  },
  {
    timestamps: true, //for date
    versionKey: false, //for version
  }
);

ProductSchema.methods.setImage = function setImage() {};
const Product = mongoose.model("Product", ProductSchema);
export default Product;
