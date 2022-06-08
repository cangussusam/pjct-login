import { OptionsValues } from "../view/options-values.js";
export class SelectUsernames {
    static names(object, output) {
        document.querySelectorAll(`.${output.id}-options`).forEach(element => element.remove());
        object.forEach((res) => OptionsValues.names(res.username, res._id, output));
    }
}
