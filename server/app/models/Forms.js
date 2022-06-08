import mongoose from "mongoose"

const formSchema = new mongoose.Schema(
    {
        id: {type: String},
        username: {type: String, required: true},
        bday: {type: String, required: true},
        cpf: {type: String, required: true},
        phone: {type: String, required: true},
        country: {type: String, required: true},
        zipcode: {type: String, required: true},
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        number: {type: String, required: true},

    },
    {
        versionKey: false
    }
)


export const forms = mongoose.model('forms', formSchema)