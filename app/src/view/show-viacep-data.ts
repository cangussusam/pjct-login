
export class ShowViaCepData {

    static Info(res: any, input: HTMLInputElement) {

        const street = document.querySelector('#street') as HTMLInputElement
        const city = document.querySelector('#city') as HTMLInputElement
        const state = document.querySelector('#state') as HTMLInputElement

        street.value = res.logradouro
        city.value = res.localidade
        state.value = res.uf
        
    }
}