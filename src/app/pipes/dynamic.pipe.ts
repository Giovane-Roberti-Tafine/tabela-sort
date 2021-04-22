import { Injector, Pipe, PipeTransform } from '@angular/core';
import { Mascara } from '../models/configuracao-modelo.interface';

@Pipe({
    name: 'dynamic'
})
export class DynamicPipe implements PipeTransform {

    constructor(public injector: Injector) {

    }

    transform(value: unknown, mask: Mascara): any {
        if (!mask.tokenPipe) {
            return value;
        }
        else {
            const pipe = this.injector.get<any>(mask.tokenPipe);
            return pipe.transform(value, mask.args);
        }
    }

}
