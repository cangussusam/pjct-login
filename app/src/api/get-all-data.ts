
export class GetAllData {

    static async receive(): Promise<any> {

        const url = 'http://localhost:3000/forms'

        return fetch(url)
            .then(res => res.json())
    }
}