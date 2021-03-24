import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

const color: { [index: string]: any; } = {
    'people': (value: any): string => {
        moment.locale('pt-br');
        let now = moment();
        let birthDate = moment(value);
        if (now.year() >= birthDate.year()) {
            if (now.isSame(birthDate, 'day')) {
                // return '#457878';
                return '#109890';
            }
            if (now.month() === birthDate.month() && now.date() === birthDate.date()) {
                return '#453070';
            }

            if (now.month() > birthDate.month() || (now.month() === birthDate.month() && now.date() > birthDate.date())) {
                return '#232323';
            }
            else {
                return '#505050';
            }
        }
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
