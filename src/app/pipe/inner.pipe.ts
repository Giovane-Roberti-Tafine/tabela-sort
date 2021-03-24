import { Injector, Pipe, PipeTransform } from '@angular/core';
import { PeopleBirthdate } from '../enum/people-birthdate.enum';
import { PeopleService } from '../service/people.service';

@Pipe({
    name: 'inner'
})
export class InnerPipe implements PipeTransform {

    private color: { [index: string]: any; } = {
        'people': (value: any): string => {
            const valueColor: { [index: string]: string; } = {
                [PeopleBirthdate.isSame]: `<span class="people-birthdate ${PeopleBirthdate[PeopleBirthdate.isSame]}"></span>`,
                [PeopleBirthdate.isBirthDay]: `<span class="people-birthdate ${PeopleBirthdate[PeopleBirthdate.isBirthDay]}"></span>`,
                [PeopleBirthdate.isBefore]: `<span class="people-birthdate ${PeopleBirthdate[PeopleBirthdate.isBefore]}"></span>`,
                [PeopleBirthdate.isAfter]: `<span class="people-birthdate ${PeopleBirthdate[PeopleBirthdate.isAfter]}"></span>`,
                '': `<span class="people-birthdate"></span>`
            };

            return valueColor[this.servicePeople.verifyBirthDate(value)];
        },
    };

    private servicePeople: any;

    constructor(private injector: Injector) {
        this.servicePeople = this.injector.get<any>(PeopleService);
    }

    transform<T>(value: T, args: string): unknown {
        return this.color[args](value);
    }

}
