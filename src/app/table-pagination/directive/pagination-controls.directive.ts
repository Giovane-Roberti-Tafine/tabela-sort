import { ChangeDetectorRef, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../model/page.model';
import { PaginationService } from '../service/pagination.service';

@Directive({
    selector: 'pagination-template,[pagination-template]',
    exportAs: 'paginationApi'
})
export class PaginationControlsDirective implements OnInit {
    @Input() id: string;
    @Input() maxSize: number = 7;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() perPageChange: EventEmitter<number> = new EventEmitter<number>();
    pages: Page[] = [];
    constructor(private paginationService: PaginationService, private cdr: ChangeDetectorRef) {
        this.paginationService.collectionSubject$.subscribe(
            (response) => {
                this.updateList();
            }
        );

    }

    ngOnInit() {
        if (this.maxSize < 3) this.maxSize = 3;

        if (this.id === undefined) {
            this.id = '';
        }

    }

    ngOnChanges(changes: any) {
        this.updateList();
    }

    ngAfterViewInit() {
        this.cdr.detectChanges();
    }

    previous() {
        this.setCurrent(this.getCurrent() - 1);
        this.updateList();
    }

    next() {
        this.setCurrent(this.getCurrent() + 1);
        this.updateList();
    }

    firstPage() {
        this.setCurrent(1);
        this.updateList();
    }

    lastPage() {
        let inst = this.paginationService.getInstance(this.id);
        this.setCurrent(Math.ceil(+inst.totalItems / +inst.itemsPerPage));
    }

    setCurrent(page: number) {
        this.pageChange.emit(page);
    }

    getCurrent(): number {
        return this.paginationService.getCurrentPage(this.id) ?? 1;
    }

    isFirstPage(): boolean {
        if (this.totalPages() === 1) {
            return true;
        }
        return this.getCurrent() === 1;
    }

    isLastPage(): boolean {
        if (this.totalPages() === 1) {
            return true;
        }
        return this.totalPages() === this.getCurrent();
    }

    totalPages(): number {
        let inst = this.paginationService.getInstance(this.id);
        return Math.ceil(+inst.totalItems / +inst.itemsPerPage);
    }

    private updateList() {
        let i = this.paginationService.getInstance(this.id);
        if (i) {
            this.pages = this.listPagination(+i.currentPage, +i.itemsPerPage, +i.totalItems, this.maxSize);
        } else {
            this.pages = [];
        }
    }

    listPagination(currentPage: number, itemsPerPage: number, totalItems: number, range: number): Page[] {
        let totalPages = Math.ceil(totalItems / itemsPerPage);
        let halfWay = Math.floor(range / 2);

        let isStart = currentPage <= halfWay;
        let isMiddle = currentPage > halfWay && currentPage <= (totalPages - halfWay);
        let isEnd = currentPage > (totalPages - halfWay);

        let list: Page[] = [];
        let enumerator = range <= totalPages ? range : totalPages;

        for (let i = 1; i <= enumerator; i++) {
            if (range > totalPages) {
                list.push({ label: '' + i, value: i });
            } else
                if (isMiddle) {
                    list.push({ label: '' + ((currentPage - halfWay - 1) + i), value: ((currentPage - halfWay - 1) + i) });
                } else
                    if (isStart) {
                        list.push({ label: '' + i, value: i });
                    } else
                        if (isEnd) {
                            list.push({ label: '' + ((totalPages - range) + i), value: ((totalPages - range) + i) });
                        }

        }
        return list;
    }

}
