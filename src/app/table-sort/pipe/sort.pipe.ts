import { Pipe, PipeTransform } from '@angular/core';
import { SortService } from '../service/sort.service';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {
    constructor(private sortService: SortService) {

    }

    transform(value: any[], nameTable: string = '', asyncName?: string): any {
        // console.log(value);

        // Verificando se esta utilizando async pipe
        if (value && asyncName) {
            value = value[asyncName];
        }

        return this.sortService.orderData(value, nameTable);
    }

}
