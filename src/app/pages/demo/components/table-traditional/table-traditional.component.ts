import { Component, OnInit } from '@angular/core';
import { Tabela } from 'src/app/classes/tabela';
import { ConfiguracaoTabela } from 'src/app/constants/contantes-tabela.contant';
import { Colunas } from 'src/app/models/configuracao-modelo.interface';
import { People } from 'src/app/models/people.model';
import { DynamicPipe } from 'src/app/pipes/dynamic.pipe';
import { PeopleService } from 'src/app/services/people.service';

@Component({
    selector: 'app-table-traditional',
    templateUrl: './table-traditional.component.html',
    styleUrls: ['./table-traditional.component.scss']
})
export class TableTraditionalComponent extends Tabela implements OnInit {
    public people: People[] = [
        { firstName: 'James', lastName: 'Dean', birthDate: new Date(1995, 5, 1) },
        { firstName: 'John', lastName: 'Smith', birthDate: new Date() },
        { firstName: 'Jane', lastName: 'Doe', birthDate: new Date(2011, 1, 1) },
        { firstName: 'Terry', lastName: 'Rundle', birthDate: new Date(2021, 6, 12) },
        { firstName: 'Barry', lastName: 'White', birthDate: new Date(1996, 2, 24) },
    ];

    public config: any = {
        id: 'Hey',
        itemsPerPage: 10,
        currentPage: 1
    };

    public configuracaoTabela = ConfiguracaoTabela['people'];

    constructor(pipeDynamic: DynamicPipe, private peopleService: PeopleService) {
        super(pipeDynamic);
    }

    ngOnInit(): void {
        this.getPeoples();
    }

    private getPeoples(): void {
        this.peopleService.getPeoples()
            .subscribe(
                (response) => {
                    this.people = response["data"];

                    this.config.totalItems = response['count'];
                }
            );
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

    get colunaBirthDate() { return this.configuracaoTabela.colunas.find(el => el.titulo === 'Birth Date'); }
    get colunaTrafficLight() { return this.configuracaoTabela.colunas.find(el => el.titulo === 'Traffic Light'); }

}
