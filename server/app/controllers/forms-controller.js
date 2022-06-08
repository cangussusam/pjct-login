
import { forms } from "../models/Forms.js";

export class FormsController {

    static viewForms = (req, res) => {
        forms.find()
            .exec((err, form) => {
                if(err) res.status(500)
                else res.status(200).json(form)
            })
    }

    static registerForm = (req, res) => {
        
        let form = new forms(req.body)

        form.save(err => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to register a new form.`})
            
            else res.status(201).send(form.toJSON())
        })
    }

    static deleteUser = (req, res) => {

        const id = req.params.id

        forms.findByIdAndDelete(id, err => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to remove the user.`})
            
            else res.status(200).send({message: 'User removed successfully.'})
        })
    }
}