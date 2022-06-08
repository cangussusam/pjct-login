
export class DeleteUser {

    static async Id(user: HTMLOptionElement): Promise<any> {
        
        const url = `http://localhost:3000/forms/${user.id}`
        
        return fetch(url, {method: 'delete'})
            .then(res => console.log(res.json))
    }

}