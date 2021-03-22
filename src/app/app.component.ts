import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'tabela';
    public people = [
        { firstName: 'James', lastName: 'Dean', birthDate: new Date(2012, 5, 1) },
        { firstName: 'John', lastName: 'Smith', birthDate: new Date(2012, 5, 12) },
        { firstName: 'Jane', lastName: 'Doe', birthDate: new Date(2011, 1, 1) },
        { firstName: 'Terry', lastName: 'Rundle', birthDate: new Date(2015, 6, 12) },
        { firstName: 'Barry', lastName: 'White', birthDate: new Date(2009, 3, 19) },
    ];
    constructor() {

    }
}
