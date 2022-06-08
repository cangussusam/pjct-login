
export class ShowUser {

    static view(object: any) {

        let table = `
        <tr> 
            <td class="tbody__keys">Nome</td>
            <td class="tbody__values">${object.username}</td>
        <tr>     
        <tr> 
            <td class="tbody__keys">Idade</td>
            <td class="tbody__values">${object.bday}</td>
        <tr>
        <tr> 
            <td class="tbody__keys">CPF</td>
            <td class="tbody__values">${object.cpf}</td>
        <tr>
        <tr> 
            <td class="tbody__keys">Telefone</td>
            <td class="tbody__values">${object.phone}</td>
        <tr>
        <tr> 
            <td class="tbody__keys">País</td>
            <td class="tbody__values">${object.country}</td>
        <tr>
        <tr> 
            <td class="tbody__keys">CEP</td>
            <td class="tbody__values">${object.zipcode}</td>
        <tr>
        <tr> 
            <td class="tbody__keys">Rua</td>
            <td class="tbody__values">${object.street}</td>
        <tr>
        <tr> 
            <td class="tbody__keys">Cidade</td>
            <td class="tbody__values">${object.city}</td>
        <tr>
        <tr> 
            <td class="tbody__keys">Estado</td>
            <td class="tbody__values">${object.state}</td>
        <tr>
        <tr> 
            <td class="tbody__keys">Número</td>
            <td class="tbody__values">${object.number}</td>
        <tr>
        `

        const tbody = document.querySelector('.results__body') as HTMLTableSectionElement
        tbody.innerHTML = ''
        tbody.innerHTML += table
    }
}