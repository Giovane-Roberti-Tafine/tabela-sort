import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'pagination-controls',
    templateUrl: './pagination-controls.component.html',
    styleUrls: ['./pagination-controls.component.scss']
})
export class PaginationControlsComponent implements OnInit {
    @Input() id: string;
    @Input() maxSize: number = 7;

    @Input() directionLastFirst: boolean = true;
    @Input() autoHide: boolean = false;
    @Input() responsive: boolean = false;

    @Input() previousLabel: string = '<';
    @Input() nextLabel: string = '>';
    @Input() lastLabel: string = '<<';
    @Input() firstLabel: string = '>>';

    @Input() screenReaderPaginationLabel: string = 'Paginação';
    @Input() screenReaderPageLabel: string = 'Pagina';

    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
    constructor() { }

    ngOnInit(): void {
    }

}
