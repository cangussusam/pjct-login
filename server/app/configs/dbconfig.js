import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://cangussusam:DindPFCon0TgFyEC@app-bd.vgnid.mongodb.net/pjct-login?retryWrites=true&w=majority')

export const db = mongoose.connection