import { Schema, model } from 'mongoose'

const categoriaSchema = new Schema({
    name: String,
    color: String
}, {
    timestamps: true
});

export default model("Categoria", categoriaSchema)