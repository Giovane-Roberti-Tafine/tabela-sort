import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SortParameter } from '../../model/sort-parameter.model';
import { SortService } from '../../service/sort.service';

@Component({
    selector: '[sort]',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
    column!: SortParameter;
    @Input('sort') public nameColumn!: string;
    constructor(private sortService: SortService) { }

    ngOnInit(): void {
        this.column = {
            name: this.nameColumn,
            order: false,
        };
        this.registerColumn();
    }

    @HostListener('click', ['$event']) public onSortClick(event: MouseEvent) {
        this.nextOrder();
        this.sortService.updateData(this.column);
    }

    private registerColumn(): void {
        this.sortService.setColumns(this.column);
    }

    private nextOrder(): void {
        if (this.column.order === 'asc') {
            this.column.order = 'desc';
        } else if (this.column.order === 'desc') {
            this.column.order = false;
        } else if (this.column.order === false) {
            this.column.order = 'asc';
        }
    }

}
