import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import {HeaderComponent} from './components/header/header.component';
import {CountriesComponent} from './components/countries/countries.component';
import {MatTableExporterModule} from "mat-table-exporter";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        CountriesComponent


    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatTableExporterModule,
        MatFormFieldModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
