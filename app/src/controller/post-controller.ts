
import { PostFormData } from "../api/post-form-data.js";
import { FormValidation } from "../validation/form-validation.js";


export class PostController {
    
    public verifyForm(input: Element) {
        input.addEventListener('blur', (event) => {
            FormValidation.verifier(event.target)
        })
    }

    public submitForm(inputs: any) {
        let values: any = []
        inputs.forEach((input: any) => {
            values.push(input.value)
        })

        PostFormData.Info(values)
    }
}