import { GetAllData } from "../api/get-all-data.js";
import { SelectUsernames } from "../model/select-usernames.js";
import { VerifyUser } from "../model/verify-user.js";

export class GetController {

    public receiveData(output: HTMLDataListElement) {
        GetAllData.receive()
            .then(values => SelectUsernames.names(values, output))
    }

    public selectOption(input: HTMLInputElement) {

        const options = document.querySelectorAll('.get-names-options') as any

        options.forEach((option : any) => {
            if(input.value == option.value){
                GetAllData.receive()
                    .then(results => VerifyUser.Id(results, option))
            }
        })
    }
}