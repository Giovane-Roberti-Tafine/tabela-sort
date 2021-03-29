import { Component, OnInit } from '@angular/core';
import { Tabela } from './classe/tabela';
import { ConfiguracaoTabela } from './constante/contantes-tabela.contant';
import { Colunas } from './model/configuracao-modelo.interface';
import { People } from './model/people.model';
import { DynamicPipe } from './pipe/dynamic.pipe';
import { PeopleService } from './service/people.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent extends Tabela implements OnInit {
    title = 'tabela';
    public people: People[] = [
        { firstName: 'James', lastName: 'Dean', birthDate: new Date(1995, 5, 1) },
        { firstName: 'John', lastName: 'Smith', birthDate: new Date() },
        { firstName: 'Jane', lastName: 'Doe', birthDate: new Date(2011, 1, 1) },
        { firstName: 'Terry', lastName: 'Rundle', birthDate: new Date(2021, 6, 12) },
        { firstName: 'Barry', lastName: 'White', birthDate: new Date(1996, 2, 24) },
    ];
    public configuracaoTabela = ConfiguracaoTabela['people'];

    public spinner = false;

    constructor(pipeDynamic: DynamicPipe, private peopleService: PeopleService) {
        super(pipeDynamic);
    }

    ngOnInit(): void {
        this.getPeoples();
    }

    private getPeoples(): void {
        this.spinner = true;
        this.peopleService.getPeoples()
            .subscribe(
                (response) => {
                    this.spinner = false;
                    console.log(response);
                    this.people = response;
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
    get colunaAniversario() { return this.configuracaoTabela.colunas.find(el => el.titulo === 'Aniversário'); }
}
