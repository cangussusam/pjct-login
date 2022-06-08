import { PostFormData } from "../api/post-form-data.js";
import { FormValidation } from "../validation/form-validation.js";
export class PostController {
    verifyForm(input) {
        input.addEventListener('blur', (event) => {
            FormValidation.verifier(event.target);
        });
    }
    submitForm(inputs) {
        let values = [];
        inputs.forEach((input) => {
            values.push(input.value);
        });
        PostFormData.Info(values);
    }
}
