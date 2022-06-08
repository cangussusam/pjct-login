import { DeleteController } from "./controller/delete-controller.js"
import { GetController } from "./controller/get-controller.js"
import { PostController } from "./controller/post-controller.js"

//GET
const getController = new GetController
const getUpdateButton  = document.querySelector('.get__update-button') as HTMLButtonElement
const getInput = document.querySelector('.update__input') as HTMLInputElement
const getUpdate = document.querySelector('#get-names') as HTMLDataListElement

getUpdateButton.addEventListener('click', () => getController.receiveData(getUpdate))

getInput.addEventListener('input', () => getController.selectOption(getInput))


//POST
const postController = new PostController
const inputs = document.querySelectorAll('.form__input')
const postButton = document.querySelector('.submit__button') as HTMLButtonElement
const form = document.querySelector('.form') as HTMLFormElement

inputs.forEach(input => postController.verifyForm(input))

postButton.addEventListener('click', event => {
    if(form.checkValidity()){
        event.preventDefault()
        postController.submitForm(inputs)

        form.reset()
    }
})

//DELETE
const deleteController = new DeleteController
const deleteUpdateButton = document.querySelector('.delete__update-button') as HTMLButtonElement
const deleteUpdate = document.querySelector('#delete-names') as HTMLDataListElement
const deleteUserButton = document.querySelector('.delete__user-button') as HTMLButtonElement
const deleteInput = document.querySelector('.delete__update-input') as HTMLInputElement

deleteUpdateButton.addEventListener('click', () => getController.receiveData(deleteUpdate))

deleteUserButton.addEventListener('click', () => deleteController.deleteUser(deleteInput))
