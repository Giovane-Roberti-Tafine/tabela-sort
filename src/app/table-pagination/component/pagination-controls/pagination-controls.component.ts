import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PaginationControlsDirective } from '../../directive/pagination-controls.directive';

@Component({
    selector: 'pagination-controls',
    templateUrl: './pagination-controls.component.html',
    styleUrls: ['./pagination-controls.component.scss'],
})
export class PaginationControlsComponent implements OnInit {
    @ViewChild('p') p: PaginationControlsDirective;

    @Input() id: string;
    @Input() maxSize: number = 3;

    @Input() directionLastFirst: boolean = true;
    @Input() directionPreviousNext: boolean = true;
    @Input() autoHide: boolean = false;
    @Input() responsive: boolean = false;

    @Input() previousLabel: string = '<';
    @Input() nextLabel: string = '>';
    @Input() lastLabel: string = '>>';
    @Input() firstLabel: string = '<<';

    @Input() screenReaderPaginationLabel: string = 'Paginação';
    @Input() screenReaderPageLabel: string = 'Pagina';
    @Input() screenReaderCurrentLabel: string = `Você está na página`;

    @Input() rangePerPage: number[] = [];

    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() perPageChange: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    setPerPage(event) {
        this.p.setCurrent(1);
        this.perPageChange.emit(event.target.value);
    }

}
