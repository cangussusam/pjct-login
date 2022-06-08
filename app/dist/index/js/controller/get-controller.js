import { GetAllData } from "../api/get-all-data.js";
import { SelectUsernames } from "../model/select-usernames.js";
import { VerifyUser } from "../model/verify-user.js";
export class GetController {
    receiveData(output) {
        GetAllData.receive()
            .then(values => SelectUsernames.names(values, output));
    }
    selectOption(input) {
        const options = document.querySelectorAll('.get-names-options');
        options.forEach((option) => {
            if (input.value == option.value) {
                GetAllData.receive()
                    .then(results => VerifyUser.Id(results, option));
            }
        });
    }
}
