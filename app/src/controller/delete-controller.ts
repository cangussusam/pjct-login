import { DeleteUser } from "../api/delete-user.js"

export class DeleteController {

    public deleteUser(input: HTMLInputElement) {
        const options = document.querySelectorAll('.delete-names-options') as any

        options.forEach((option : any) => {
            if(input.value == option.value){
                DeleteUser.Id(option)
            }
        })
    }

}