import { Pipe, PipeTransform } from '@angular/core';
import { SortService } from '../service/sort.service';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {
    constructor(private sortService: SortService) {

    }

    transform(value: any[], nameTable: string = ''): any {
        // console.log(value);
        return this.sortService.orderData(value, nameTable);
    }

}
