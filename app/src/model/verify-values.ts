import { GetZipCodeData } from "../service/get-zipcode-data.js"

export class VerifyValues {

    static age(dataType: string, input: HTMLInputElement) {
        const date = new Date
        const receivedDate = new Date(input.value)
        let message = ''
    
        if(date <= receivedDate){
            message = 'A data digitada não é válida'    
        }
    
        input.setCustomValidity(message)
    }

    static zipcode(dataType: string, input: HTMLInputElement) {
        const regex = new RegExp(/[\d]{5}-?[\d]{3}/)
        if(regex.test(input.value)) GetZipCodeData.ZipInfo(input)
        
    }
}