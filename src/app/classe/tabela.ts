import { Colunas } from "../model/configuracao-modelo.interface";
import { DynamicPipe } from "../pipe/dynamic.pipe";

export class Tabela {

    constructor(protected pipeDynamic: DynamicPipe) { }

    protected getValue(value: any, prop: Colunas): string {
        if (prop.mascara) {
            return this.pipeDynamic.transform(value[prop.propriedade], prop.mascara);
        }

        return value[prop.propriedade];
    }

}
