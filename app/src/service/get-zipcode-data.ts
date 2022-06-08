import { ShowViaCepData } from "../view/show-viacep-data.js"

export class GetZipCodeData {

    static async ZipInfo(input: HTMLInputElement): Promise<any> {

        const zip = input.value.replace(/\D/g, '')
        const url = `https://viacep.com.br/ws/${zip}/json/`

        return fetch(url)
            .then(res => res.json())
            .then(res => ShowViaCepData.Info(res, input))
    }

}