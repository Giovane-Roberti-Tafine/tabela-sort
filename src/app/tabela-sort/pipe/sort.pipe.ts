import { Inject, Pipe, PipeTransform } from '@angular/core';
import { SortService } from '../service/sort.service';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {

    constructor(private sortService: SortService) {

    }

    transform(value: any[], ...args: unknown[]): any {
        // console.log(value);
        if (!this.sortService.getData()) {
            this.sortService.setData(value);
        }

        return this.sortService.orderData();
    }

}
