import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortComponent } from './tabela-sort/component/sort/sort.component';
import { SortPipe } from './tabela-sort/pipe/sort.pipe';
import { SortService } from './tabela-sort/service/sort.service';
import { DynamicPipe } from './pipe/dynamic.pipe';
import { DatePipe } from '@angular/common';
import { ColorPipe } from './pipe/color.pipe';
import { InnerPipe } from "./pipe/inner.pipe";
import { PeopleService } from './service/people.service';
import { HttpClientModule } from '@angular/common/http';
// import { PaginatePipe } from './tabela-pagination/paginate.pipe';
// import { PaginationControlsComponent } from './tabela-pagination/pagination-controls.component';
// import { PaginationControlsDirective } from './tabela-pagination/pagination-controls.directive';
// import { PaginationService } from "./tabela-pagination/pagination.service";
import { PaginationPipe } from './pagination/pipe/pagination.pipe';
import { PaginationControlsDirective } from "./pagination/directive/pagination-controls.directive";

@NgModule({
    declarations: [
        AppComponent,
        SortComponent,
        SortPipe,
        DynamicPipe,
        ColorPipe,
        InnerPipe,
        PaginationControlsDirective,
        PaginationPipe,
        PaginationControlsDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        DatePipe,
        SortService,
        DynamicPipe,
        PeopleService,
        ColorPipe,
        InnerPipe,
        // PaginationService,
        PaginationPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
