import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortComponent } from './tabela-sort/component/sort/sort.component';
import { SortPipe } from './tabela-sort/pipe/sort.pipe';
import { SortService } from './tabela-sort/service/sort.service';
import { DynamicPipe } from './pipe/dynamic.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        SortComponent,
        SortPipe,
        DynamicPipe,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        DatePipe,
        SortService,
        DynamicPipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
