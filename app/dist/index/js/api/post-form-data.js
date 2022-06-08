var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class PostFormData {
    static Info(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'http://localhost:3000/forms';
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
            };
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then(json => console.log(json));
        });
    }
}
