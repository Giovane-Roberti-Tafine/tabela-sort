import { Injectable } from '@angular/core';
import { SortParameter } from '../model/sort-parameter.model';
import { orderBy } from 'lodash';
@Injectable({
    providedIn: 'root'
})
export class SortService {
    private columns: SortParameter[] = [];
    private shouldSort: boolean = false;
    constructor() { }

    public setColumns(column: SortParameter): void {
        if (!this.columns.find((c) => c.name === column.name)) {
            if (!column.priority) {
                column.priority = this.columns.length + 1;
            }
            this.columns.push(column);
        }
    }

    public orderData(data: any[]): any[] {
        let dataRef = data;
        let indices: string[] = [];
        let orders: any[] = [];
        this.columns.map((el, i) => {
            let index = this.columns.findIndex((c) => c.priority === (i + 1));
            if (this.columns[index].order) {
                indices.push(this.columns[index].name);
                orders.push(this.columns[index].order);
            }
        });

        dataRef = orderBy(dataRef, indices, orders);
        return dataRef;
    }

    public updateData(column: SortParameter): void {
        let index = this.columns.findIndex((c) => c.name === column.name);
        this.columns[index] = column;

        this.shouldSort = !this.shouldSort;
    }
}
