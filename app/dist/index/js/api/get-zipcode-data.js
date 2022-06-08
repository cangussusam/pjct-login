var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ShowViaCepData } from "../view/show-viacep-data.js";
export class GetZipCodeData {
    static ZipInfo(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const zip = input.value.replace(/\D/g, '');
            const url = `https://viacep.com.br/ws/${zip}/json/`;
            return fetch(url)
                .then(res => res.json())
                .then(res => ShowViaCepData.Info(res, input));
        });
    }
}
