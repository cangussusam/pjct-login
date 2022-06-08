import { OptionsValues } from "../view/options-values.js";

export class SelectUsernames {
    
    static names(object: any, output: HTMLDataListElement) {

        document.querySelectorAll(`.${output.id}-options`).forEach(element => element.remove())

        object.forEach((res: any) => OptionsValues.names(res.username, res._id, output))
    }
}