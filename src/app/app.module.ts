import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortComponent } from './tabela-sort/component/sort/sort.component';
import { SortPipe } from './tabela-sort/pipe/sort.pipe';
import { SortService } from './tabela-sort/service/sort.service';

@NgModule({
    declarations: [
        AppComponent,
        SortComponent,
        SortPipe,
    ],
    imports: [
        BrowserModule
    ],
    providers: [SortService],
    bootstrap: [AppComponent]
})
export class AppModule { }
