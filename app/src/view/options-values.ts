
export class OptionsValues{

    static names(name: string, id: string, output: HTMLDataListElement) {
        
        const names = document.querySelector(`#${output.id}`) as HTMLDataListElement
        const option = document.createElement('option')

        option.value = name
        option.classList.add(`${output.id}-options`)
        option.setAttribute('id', id)
        names.appendChild(option)

    }

}