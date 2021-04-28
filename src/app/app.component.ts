import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/vs2015.css';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

    @ViewChild('code') codeElement: ElementRef;

    constructor() {

    }

    ngAfterViewInit() {
        // hljs.registerLanguage('typescript', typescript);
        // hljs.highlightBlock(this.codeElement.nativeElement);

    }

    ngOnInit(): void {

    }

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

    public codigo = `
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
    `;

}
