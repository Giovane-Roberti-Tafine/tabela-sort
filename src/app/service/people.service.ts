import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { PeopleBirthdate } from '../enum/people-birthdate.enum';
import { People } from '../model/people.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    private readonly apiPeople = 'https://next.json-generator.com/api/json/get/4yrq76BE5?indent=2';

    constructor(private http: HttpClient) { }

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

    getPeoples(): Observable<People[]> {
        return this.http.get<People[]>(this.apiPeople)
            .pipe(
                catchError(this.handleError<People[]>('get Peoples', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    protected log(message: string) {
        console.log(`ApiService: ${message}`);
    }
}
