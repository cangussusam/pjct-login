import { DeleteUser } from "../api/delete-user.js";
export class DeleteController {
    deleteUser(input) {
        const options = document.querySelectorAll('.delete-names-options');
        options.forEach((option) => {
            if (input.value == option.value) {
                DeleteUser.Id(option);
            }
        });
    }
}
