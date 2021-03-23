import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { SortParameter } from '../../model/sort-parameter.model';
import { SortService } from '../../service/sort.service';

@Component({
    selector: '[sort]',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit, AfterViewInit, AfterViewChecked {
    column!: SortParameter;
    @Input('sort') public nameColumn!: string;
    @ViewChild('iconInicial', { read: ElementRef }) public elementNull!: ElementRef<HTMLSpanElement>;
    constructor(private sortService: SortService) { }

    ngOnInit(): void {
        this.column = {
            name: this.nameColumn,
            order: false,
        };
        this.sortService.setColumns(this.column);

    }

    @HostListener('click', ['$event']) public onSortClick(event: MouseEvent) {
        this.nextOrder();
        this.sortService.updateData(this.column);
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

    ngAfterViewInit(): void {
        console.log(this.elementNull.nativeElement.offsetWidth);
        console.log(this.elementNull.nativeElement.clientWidth);
        console.log(this.elementNull.nativeElement.scrollWidth);
        console.log(document.defaultView?.getComputedStyle(this.elementNull.nativeElement, null)['display']);
        //     this.elementNull.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        //     <g id="Grupo_256" data-name="Grupo 256" transform="translate(-1278 -289)">
        //       <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M4.565.927,5.588,1.95a.111.111,0,0,1,0,.156L3.112,4.584,2.059,4.7a.221.221,0,0,1-.244-.244L1.932,3.4,4.409.927A.111.111,0,0,1,4.565.927ZM6.4.668,5.849.114a.444.444,0,0,0-.626,0l-.4.4a.111.111,0,0,0,0,.156L5.845,1.7A.111.111,0,0,0,6,1.7l.4-.4a.444.444,0,0,0,0-.626ZM4.355,3.91V5.064H.726V.516l3.4.013a.139.139,0,0,0,.1-.04L4.675.035a.136.136,0,0,0-.1-.232L.544-.21A.544.544,0,0,0,0,.334V5.246a.544.544,0,0,0,.544.544H4.536a.544.544,0,0,0,.544-.544V3.456a.136.136,0,0,0-.232-.1l-.454.454A.139.139,0,0,0,4.355,3.91Z" transform="translate(1281 292.21)" fill="%23FFFFFF"/>
        //     </g>
        //   </svg>`;
    }

    ngAfterViewChecked() {
    }

}
