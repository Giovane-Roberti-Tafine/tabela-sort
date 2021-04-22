import { PaginationPipeArgs } from "./pagination-pipe.model";

export interface PipeState {
    instance?: PaginationPipeArgs,
    collection?: any[];
    size?: any[];
}