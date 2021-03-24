import { Colunas, Mascara } from "../model/configuracao-modelo.interface";
import { DynamicPipe } from "../pipe/dynamic.pipe";

export class Tabela {

    constructor(protected pipeDynamic: DynamicPipe) { }

    protected getValue<T>(value: T, prop: Colunas): string {
        let val = value[prop.propriedade];
        if (prop.mascara) {
            val = this.mascara(value[prop.propriedade], prop.mascara);
        }

        return val;
    }

    protected getColor<T>(value: T, prop: Colunas): string {
        if (prop.color) {
            return this.mascara(value[prop.propriedade], prop.color);
        }
        return '';
    }

    protected mascara<T>(value: T, mascara: Mascara): string {
        return this.pipeDynamic.transform(value, mascara);
    }

}
