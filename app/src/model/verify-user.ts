import { ShowUser } from "../view/show-user.js"

export class VerifyUser {

    static Id(object: any, optionValue: HTMLOptionElement) {

        object.forEach((obj: any) => {
            if(obj._id == optionValue.id){

                ShowUser.view(obj)
            }
        })


    }
} 