export class ShowViaCepData {
    static Info(res, input) {
        const street = document.querySelector('#street');
        const city = document.querySelector('#city');
        const state = document.querySelector('#state');
        street.value = res.logradouro;
        city.value = res.localidade;
        state.value = res.uf;
    }
}
