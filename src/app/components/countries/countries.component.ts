import {ApiCountryService} from './../../services/api-country.service';
import {Component, OnInit} from '@angular/core';
import {ICountry} from 'src/app/models/country';
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

    countries!: ICountry[];
    nameNative!: string;

    public pageSlice: any;

    constructor(private country: ApiCountryService) {
    }

    displayedColumns = ['name', 'capital', 'region', 'subregion', 'population', 'area','nativeName', 'flags'];

    ngOnInit(): void {
        this.country.getAllCountry().subscribe(data => {
            if (data) {
                this.countries = [];
                data.map(x => {
                    const auxName: any = x["name"];
                    const name = auxName["common"];

                    let nameAux: any = x["name"];
                    let nativeNameAux: any = nameAux["nativeName"];
                    if (typeof nativeNameAux === undefined) {
                        console.log(undefined)
                    } else {
                        let variavel = Object.keys(nativeNameAux);
                        variavel.forEach(data => {
                            nameAux = nativeNameAux[data];
                            const official: any = nameAux['official']
                            this.nameNative = official
                            console.log(this.nameNative)
                        })

                    }


                    const capital = x["capital"]

                    const region = x["region"]
                    const subregion = x["subregion"]

                    const area = x["area"]

                    const population = x["population"]

                    const auxtimezones: any = x["timezones"]
                    const timezones = auxtimezones[0];

                    const auxFlag: any = x["flags"]
                    const flag = auxFlag["png"];


                    const value: ICountry = {
                        name: name,
                        capital: capital,
                        region: region,
                        subregion: subregion,
                        population: population,
                        area: area,
                        timezones: timezones,
                        nativeName: this.nameNative,
                        flags: flag

                    }
                    this.countries.push(value)
                });
            }
        });
        if (this.countries) {
            this.pageSlice = this.countries.slice(1, 3);
        }
    }


    //Paginator
    onPageChange(event: PageEvent) {
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if (endIndex > this.countries.length) {
            endIndex = this.countries.length
        }
        this.pageSlice = this.countries.slice(startIndex, endIndex)
    }

}
