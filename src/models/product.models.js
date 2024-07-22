import { Schema, model } from "mongoose";
import mongoosePaginte from 'mongoose-paginate-v2'

const productCollection = 'products'

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    code: String,
    stock: Number,
    status: Boolean,
    category: String
});

productSchema.plugin(mongoosePaginte)

export default model(productCollection, productSchema);

