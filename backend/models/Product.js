const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = model('Product', productSchema);
