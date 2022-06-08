export class OptionsValues {
    static names(name, id, output) {
        const names = document.querySelector(`#${output.id}`);
        const option = document.createElement('option');
        option.value = name;
        option.classList.add(`${output.id}-options`);
        option.setAttribute('id', id);
        names.appendChild(option);
    }
}
