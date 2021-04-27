import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortComponent } from './table-sort/component/sort/sort.component';
import { SortPipe } from './table-sort/pipe/sort.pipe';
import { SortService } from './table-sort/service/sort.service';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { DatePipe } from '@angular/common';
import { ColorPipe } from './pipes/color.pipe';
import { InnerPipe } from "./pipes/inner.pipe";
import { PeopleService } from './services/people.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationPipe } from './table-pagination/pipe/pagination.pipe';
import { PaginationControlsDirective } from "./table-pagination/directive/pagination-controls.directive";
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './pages/demo/page-component/demo.component';
import { TableObjectComponent } from './pages/demo/components/table-object/table-object.component';
import { TableTraditionalComponent } from './pages/demo/components/table-traditional/table-traditional.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationControlsComponent } from './table-pagination/component/pagination-controls/pagination-controls.component';

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
        PaginationControlsDirective,
        DemoComponent,
        TableObjectComponent,
        TableTraditionalComponent,
        PaginationControlsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        DatePipe,
        SortService,
        DynamicPipe,
        PeopleService,
        ColorPipe,
        InnerPipe,
        // PaginationService,
        PaginationPipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
