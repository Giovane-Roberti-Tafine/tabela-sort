import { Pipe, PipeTransform } from '@angular/core';
import { PaginationPipeArgs } from "../model/pagination-pipe.model";
import { PaginationService } from '../service/pagination.service';

export type Collection<T> = T[] | ReadonlyArray<T>;

@Pipe({
    name: 'pagination',
    pure: false
})

export class PaginationPipe implements PipeTransform {

    constructor(private paginationService: PaginationService) { }

    transform<T, U extends Collection<T>>(value: [], args: PaginationPipeArgs): U {
        let serverSideMode = args.totalItems !== undefined && args.totalItems !== value.length;
        let instance = this.createInstance(value, args);

        if (!serverSideMode) {
            return this.paginationService.localSideMode(value, instance).size as U;

        }

        return null;
    }


    private createInstance(collection: Collection<any>, config: PaginationPipeArgs): PaginationPipeArgs {
        return {
            id: config.id != null ? config.id : '',
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    }

}
