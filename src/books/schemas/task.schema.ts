import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    titulo: String,
    descricao: String,
    criacao: Date,
    tipo: String,
    status: String,
    userAssociado: String,
    conclusao: Date
}, {
    timestamps: true
});

export default model("Task", taskSchema)