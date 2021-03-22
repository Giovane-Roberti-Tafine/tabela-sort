export interface SortParameter {
    name: string;
    order: 'asc' | 'desc' | false;
    priority?: number;
}