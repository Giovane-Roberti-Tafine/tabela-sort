import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SortParameter } from '../../model/sort-parameter.model';
import { SortService } from '../../service/sort.service';

@Component({
    selector: '[sort]',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit, AfterViewInit {
    column!: SortParameter;
    @Input('sort') public nameColumn!: string;
    @Input('order') public orderColumn: SortParameter["order"] = false;
    @Input('nameTable') public nameTable?: string = '';
    @ViewChild('iconInicial', { read: ElementRef }) public iconInicial!: ElementRef<HTMLSpanElement>;
    @ViewChild('iconAsc', { read: ElementRef }) public iconAsc!: ElementRef<HTMLSpanElement>;
    @ViewChild('iconDesc', { read: ElementRef }) public iconDesc!: ElementRef<HTMLSpanElement>;
    constructor(private sortService: SortService) { }

    ngOnInit(): void {
        if (this.nameColumn) {
            this.column = {
                name: this.nameColumn,
                order: this.orderColumn,
            };
            this.sortService.setColumns(this.column, this.nameTable);
        }
    }

    @HostListener('click', ['$event']) public onSortClick(event: MouseEvent) {
        this.nextOrder();
        this.sortService.updateData(this.column, this.nameTable);
    }

    private nextOrder(): void {
        if (this.column.order === 'asc') {
            this.column.order = 'desc';
        } else if (this.column.order === 'desc') {
            this.column.order = false;
        } else if (this.column.order === false) {
            this.column.order = 'asc';
        }
        // setTimeout(() => {
        //     this.ngAfterViewInit();

        // }, 0);
    }

    ngAfterViewInit(): void {
        // console.log(this.iconDesc?.nativeElement.style.width);
        // this.iconInicial?.nativeElement.offsetWidth ? '' : this.iconInicial?.nativeElement.style.setProperty('display', 'none');
        // this.iconAsc?.nativeElement.offsetWidth ? '' : this.iconAsc?.nativeElement.style.setProperty('display', 'none');
        // this.iconDesc?.nativeElement.offsetWidth ? '' : this.iconDesc?.nativeElement.style.setProperty('display', 'none');
    }


}
