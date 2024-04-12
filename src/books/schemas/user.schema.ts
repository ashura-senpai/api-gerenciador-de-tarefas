import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: String,
    peso: Number,
    email: String,
    senha: String
}, {
    timestamps: true
});

export default model("User", userSchema)