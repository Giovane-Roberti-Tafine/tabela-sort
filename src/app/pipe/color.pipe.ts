import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

const color: { [index: string]: any; } = {
    'people': (value: any) => {
        let now = moment.now();
        if (moment(value).isSame(now, 'day')) { return '#457878'; }
        if (moment(value).isAfter(now)) { return '#232323'; }
        if (moment(value).isBefore(now)) { return '#505050'; }
        return '';
    },
};

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {

    transform<T>(value: T, args: string): string {
        return color[args](value);
    }

}
