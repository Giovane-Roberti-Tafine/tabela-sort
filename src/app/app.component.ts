import { Component, OnInit } from '@angular/core';
import { Tabela } from './classes/tabela';
import { ConfiguracaoTabela } from './constants/contantes-tabela.contant';
import { Colunas } from './models/configuracao-modelo.interface';
import { People } from './models/people.model';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { PeopleService } from './services/people.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    // title = 'tabela';
    // public people: People[] = [
    //     { firstName: 'James', lastName: 'Dean', birthDate: new Date(1995, 5, 1) },
    //     { firstName: 'John', lastName: 'Smith', birthDate: new Date() },
    //     { firstName: 'Jane', lastName: 'Doe', birthDate: new Date(2011, 1, 1) },
    //     { firstName: 'Terry', lastName: 'Rundle', birthDate: new Date(2021, 6, 12) },
    //     { firstName: 'Barry', lastName: 'White', birthDate: new Date(1996, 2, 24) },
    // ];

    // public peoplePaginate: People[] = [];

    // public configuracaoTabela = ConfiguracaoTabela['people'];

    // public spinner = false;

    // public collection: string[] = [];
    // public currentPage: number = 1;

    // public config: any = {
    //     id: 'custom',
    //     itemsPerPage: 10,
    //     currentPage: 3
    // };

    // public config2: any = {
    //     id: 'Hey',
    //     itemsPerPage: 10,
    //     currentPage: 1
    // };

    constructor() {
        // console.log(this.createPageArray(1, 10, 60, 5));

        // for (let i = 1; i <= 100; i++) {
        //     this.collection.push(`item ${i}`);
        // }
    }

    ngOnInit(): void {
        // this.getPeoples();
        // this.getPeoplesPaginate();
        // this.getPage(1);
    }

    // private getPeoples(): void {
    //     this.spinner = true;
    //     this.peopleService.getPeoples()
    //         .subscribe(
    //             (response) => {
    //                 this.spinner = false;
    //                 console.log(response);
    //                 this.people = response["data"];

    //                 this.config.totalItems = response['count'];
    //             }
    //         );
    // }

    // private getPeoplesPaginate(): void {
    //     this.spinner = true;
    //     this.peopleService.getPeoplesPaginate(this.config.currentPage, this.config.itemsPerPage)
    //         .subscribe(
    //             (response) => {
    //                 this.spinner = false;
    //                 this.peoplePaginate = response['data'];
    //                 console.log(response['data']);
    //             }
    //         );
    // }

    // public getPage(page: number): string[] {
    //     this.currentPage = page;
    //     this.collection = [];
    //     for (let i = 1; i <= 10; i++) {
    //         this.collection.push(`item ${i + ((page * 10) - 10)}`);
    //     }

    //     return this.collection;
    // }

    // public obterValor(person: People, prop: Colunas): string {
    //     return this.getValue<People>(person, prop);
    // }

    // public obterColor(person: People, prop: Colunas) {
    //     return this.getColor<People>(person, prop);
    // }

    // public obterClass(person: People, prop: Colunas): string {
    //     return this.getClass<People>(person, prop);
    // }

    // get colunaBirthDate() { return this.configuracaoTabela.colunas.find(el => el.titulo === 'Birth Date'); }
    // get colunaTrafficLight() { return this.configuracaoTabela.colunas.find(el => el.titulo === 'Traffic Light'); }

    private createPageArray(currentPage: number, itemsPerPage: number, totalItems: number, paginationRange: number): any[] {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        let pages = [];
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        console.log('totalPages', totalPages);
        const halfWay = Math.ceil(paginationRange / 2);
        console.log('hlfWay', halfWay);

        const isStart = currentPage <= halfWay;
        console.log('isStart', isStart);
        const isEnd = totalPages - halfWay < currentPage;
        console.log('isEnd', isEnd);
        const isMiddle = !isStart && !isEnd;
        console.log('isMiddle', isMiddle);

        let ellipsesNeeded = paginationRange < totalPages;
        let i = 1;

        while (i <= totalPages && i <= paginationRange) {
            console.log('i', i);
            let label;
            let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            console.log('pageNumber', pageNumber);
            let openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            let closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            } else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    }

    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    private calculatePageNumber(i: number, currentPage: number, paginationRange: number, totalPages: number) {
        let halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        } else if (i === 1) {
            return i;
        } else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            } else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            } else {
                return i;
            }
        } else {
            return i;
        }
    }
}
