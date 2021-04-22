import { Injector, Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";
import { PeopleBirthdate } from '../enums/people-birthdate.enum';
import { PeopleService } from '../services/people.service';

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {

    private color: { [index: string]: any; } = {
        'people': (value: any): string => {
            const valueColor: { [index: string]: string; } = {
                [PeopleBirthdate.isSame]: '#109890',
                [PeopleBirthdate.isBirthDay]: '#453070',
                [PeopleBirthdate.isBefore]: '#232323',
                [PeopleBirthdate.isAfter]: '#505050',
                // '': ''
            };

            return valueColor[this.peopleService.verifyBirthDate(value)];
        },
    };

    constructor(private peopleService: PeopleService) { }

    transform<T>(value: T, args: string): string {
        return this.color[args](value);
    }

}
