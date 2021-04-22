import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tabela } from 'src/app/classes/tabela';
import { ConfiguracaoTabela } from 'src/app/constants/contantes-tabela.contant';
import { Colunas } from 'src/app/models/configuracao-modelo.interface';
import { People } from 'src/app/models/people.model';
import { DynamicPipe } from 'src/app/pipes/dynamic.pipe';
import { PeopleService } from 'src/app/services/people.service';
import { PaginationPipeArgs } from 'src/app/table-pagination/model/pagination-pipe.model';

@Component({
    selector: 'app-table-object',
    templateUrl: './table-object.component.html',
    styleUrls: ['./table-object.component.scss']
})
export class TableObjectComponent extends Tabela implements OnInit {
    public configuracaoTabela = ConfiguracaoTabela['people'];

    public peoplePaginate: People[] = [];

    public peoplePaginate$: Observable<People[]>;

    public config: PaginationPipeArgs = {
        id: 'custom',
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: 95
    };

    constructor(pipeDynamic: DynamicPipe, private peopleService: PeopleService) {
        super(pipeDynamic);
    }

    ngOnInit(): void {
        this.getPeoplesPaginate();
    }

    getPeoplesPaginate(event?: number): void {
        event ? this.config.currentPage = event : '';
        this.peopleService.getPeoplesPaginate(+this.config.currentPage, +this.config.itemsPerPage)
            .subscribe(
                (response) => {
                    this.peoplePaginate = response['data'];

                }
            );

        this.peoplePaginate$ = this.peopleService.getPeoplesPaginate(+this.config.currentPage, +this.config.itemsPerPage);

    }

    public obterValor(person: People, prop: Colunas): string {
        return this.getValue<People>(person, prop);
    }

    public obterColor(person: People, prop: Colunas) {
        return this.getColor<People>(person, prop);
    }

    public obterClass(person: People, prop: Colunas): string {
        return this.getClass<People>(person, prop);
    }

}
