import { ShowUser } from "../view/show-user.js";
export class VerifyUser {
    static Id(object, optionValue) {
        object.forEach((obj) => {
            if (obj._id == optionValue.id) {
                ShowUser.view(obj);
            }
        });
    }
}
