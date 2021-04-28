export interface PaginationControls {
    maxSize?: number;
    autoHide?: boolean;
    responsive?: boolean;
    previousLabel?: string;
    nextLabel?: string;
    firstLabel?: string;
    lastLabel?: string;
    rangePerPage?: number[];
    directionLastFirst?: boolean;
    directionPreviousNext?: boolean;
    screenReaderPaginationLabel?: string;
    screenReaderPageLabel?: string;
    screenReaderCurrentLabel?: string;
}