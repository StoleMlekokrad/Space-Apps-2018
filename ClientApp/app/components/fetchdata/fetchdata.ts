import { HttpClient } from 'aurelia-fetch-client';
import { inject, bindable } from 'aurelia-framework';


@inject(HttpClient)
export class Fetchdata {
    forecasts: any[] = [];

    constructor(http: HttpClient, forecasts: any[]) {
        http.fetch('https://launchlibrary.net/1.3/launch/next/15')
            .then(result => result.json())
            .then(data => {
                console.log(data);
                this.forecasts = data['launches'];
            });
    }

    weather: any[] = [];

    
}