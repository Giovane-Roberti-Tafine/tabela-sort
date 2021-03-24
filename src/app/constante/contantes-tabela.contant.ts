import { DatePipe } from "@angular/common";
import { TabelaModelo } from "../model/configuracao-modelo.interface";
import { ColorPipe } from "../pipe/color.pipe";

export const ConfiguracaoTabela: { [id: string]: TabelaModelo; } = {
    'people': {
        colunas: [
            {
                titulo: 'First Name',
                propriedade: 'firstName',
                sort: {
                    order: 'asc'
                }
            },
            {
                titulo: 'Last Name',
                propriedade: 'lastName',
            },
            {
                titulo: 'Birth Date',
                propriedade: 'birthDate',
                sort: {
                    order: false
                },
                mascara: {
                    tokenPipe: DatePipe,
                    args: ['dd/MM/yyyy']
                },
                color: {
                    tokenPipe: ColorPipe,
                    args: 'people'
                }
            }
        ]
    }
};