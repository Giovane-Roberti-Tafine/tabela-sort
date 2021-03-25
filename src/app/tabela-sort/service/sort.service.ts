import { Injectable } from '@angular/core';
import { SortParameter } from '../model/sort-parameter.model';
import { orderBy } from 'lodash';
@Injectable({
    providedIn: 'root'
})
export class SortService {
    private columns: { [index: string]: SortParameter[]; } = {};
    private shouldSort: boolean = false;
    constructor() { }

    public setColumns(column: SortParameter, nameTable: string): void {
        if (this.columns[nameTable]) {
            if (!this.columns[nameTable].find((c) => c.name === column.name)) {
                if (!column.priority) {
                    column.priority = this.columns[nameTable].length + 1;
                }
                this.columns[nameTable].push(column);
            }
        } else {
            if (!column.priority) {
                column.priority = 1;
            }
            this.columns[nameTable] = [
                {
                    ...column
                }
            ];
        }

        // console.log(this.columns);
    }

    public orderData(data: any[], nameTable: string): any[] {
        let dataRef = data;
        let indices: string[] = [];
        let orders: any[] = [];
        this.columns[nameTable]?.map((el, i) => {
            let index = this.columns[nameTable].findIndex((c) => c.priority === (i + 1));
            if (this.columns[nameTable][index].order) {
                indices.push(this.columns[nameTable][index].name);
                orders.push(this.columns[nameTable][index].order);
            }
        });

        dataRef = orderBy(dataRef, indices, orders);
        return dataRef;
    }

    public updateData(column: SortParameter, nameTable: string): void {
        let index = this.columns[nameTable].findIndex((c) => c.name === column.name);
        this.columns[nameTable][index] = column;

        this.shouldSort = !this.shouldSort;
    }
}
