import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaginationPipeArgs } from '../model/pagination-pipe.model';
import { PipeState } from '../model/pipe-state.model';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {

    private state: { [id: string]: PipeState; } = {};

    public collectionSubject$: BehaviorSubject<PipeState> = new BehaviorSubject<PipeState>(null);

    localSideMode(collection: any[], instance: PaginationPipeArgs): PipeState {
        this.state[instance.id] = { instance: instance, collection: collection };

        let instanceRef = this.state[instance.id].instance;
        let start = (+instanceRef.currentPage - 1) * +instanceRef.itemsPerPage;
        let end = start + +instanceRef.itemsPerPage;

        this.state[instance.id].size = collection.slice(start, end);

        this.collectionSubject$.next(this.state[instance.id]);
        return this.state[instance.id];
    }

    public getCurrentPage(id: string): number {
        if (this.state[id]) {
            return +this.state[id].instance.currentPage;
        }

        return null;
    }

    public getInstance(id: string): PaginationPipeArgs {
        return this.state[id]?.instance;
    }
}
