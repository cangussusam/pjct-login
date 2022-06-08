import { DeleteController } from "./controller/delete-controller.js";
import { GetController } from "./controller/get-controller.js";
import { PostController } from "./controller/post-controller.js";
const getController = new GetController;
const getUpdateButton = document.querySelector('.get__update-button');
const getInput = document.querySelector('.update__input');
const getUpdate = document.querySelector('#get-names');
getUpdateButton.addEventListener('click', () => getController.receiveData(getUpdate));
getInput.addEventListener('input', () => getController.selectOption(getInput));
const postController = new PostController;
const inputs = document.querySelectorAll('.form__input');
const postButton = document.querySelector('.submit__button');
const form = document.querySelector('.form');
inputs.forEach(input => postController.verifyForm(input));
postButton.addEventListener('click', event => {
    if (form.checkValidity()) {
        event.preventDefault();
        postController.submitForm(inputs);
        form.reset();
    }
});
const deleteController = new DeleteController;
const deleteUpdateButton = document.querySelector('.delete__update-button');
const deleteUpdate = document.querySelector('#delete-names');
const deleteUserButton = document.querySelector('.delete__user-button');
const deleteInput = document.querySelector('.delete__update-input');
deleteUpdateButton.addEventListener('click', () => getController.receiveData(deleteUpdate));
deleteUserButton.addEventListener('click', () => deleteController.deleteUser(deleteInput));
