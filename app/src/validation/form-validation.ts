import { VerifyValues } from "../model/verify-values.js"

export class FormValidation {
 
    static verifier(input: any) {
        const dataType = input.dataset.type
        
        switch(dataType) {

            case 'age' :
                VerifyValues.age(dataType, input)
                break
            case 'zipcode' :
                VerifyValues.zipcode(dataType, input)
                break
        }
    }
}
