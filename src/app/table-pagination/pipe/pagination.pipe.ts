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

    transform<T, U extends Collection<T>>(value: any[], args: PaginationPipeArgs): U {
        let serverSideMode = args.totalItems !== undefined && args.totalItems !== value.length;

        // Verificando se esta utilizando async pipe
        if (value.length >= 2 && value[0] instanceof Array) {
            value = value.filter((v, i) => i === 0)[0] as [];
        }

        // Atribuindo valores em cache para value, 
        //quando ocorre uma mudança de page
        //utilizando async pipe
        if (value.length === 0 || value === null) {
            let _id = args.id || '';
            if (this.paginationService.getInstance(_id)) {
                value = this.paginationService.getSize(_id);
            } else {
                value = [];
            }
        }

        let instance = this.createInstance(value, args);

        if (!serverSideMode) {
            return this.paginationService.localSideMode(value, instance).size as U;

        } else {
            return this.paginationService.serverSideMode(value, instance).collection as U;
        }

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
