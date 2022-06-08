
export class PostFormData {

    static async Info(values: any[]): Promise<any> {

        const url = 'http://localhost:3000/forms'
        const body = {
            "username": values[0],
            "bday": values[1],
            "cpf": values[2],
            "phone": values[3],
            "country": values[4],
            "zipcode": values[5],
            "street": values[6],
            "city": values[7],
            "state": values[8],
            "number": values[9]
        }

        return fetch(url, {
            method : 'POST',
            body : JSON.stringify(body),
            headers : {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
            .then(json => console.log(json))
    }
}