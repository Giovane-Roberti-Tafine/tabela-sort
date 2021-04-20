export interface PaginationPipeArgs {
    id?: string;
    itemsPerPage: string | number;
    currentPage: string | number;
    totalItems?: string | number;
}