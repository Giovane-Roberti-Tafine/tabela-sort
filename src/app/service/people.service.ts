import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { PeopleBirthdate } from '../enum/people-birthdate.enum';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor() { }

    verifyBirthDate(value: any): '' | PeopleBirthdate {
        moment.locale('pt-br');
        let now = moment();
        let birthDate = moment(value);
        if (now.isSame(birthDate, 'day') || now.isAfter(birthDate, 'day')) {
            if (now.isSame(birthDate, 'day')) {
                // return '#457878';
                return PeopleBirthdate.isSame;
            }
            if (now.month() === birthDate.month() && now.date() === birthDate.date()) {
                return PeopleBirthdate.isBirthDay;
            }

            if (now.month() > birthDate.month() || (now.month() === birthDate.month() && now.date() > birthDate.date())) {
                return PeopleBirthdate.isBefore;
            }
            else {
                return PeopleBirthdate.isAfter;
            }
        }
        return '';
    }
}
