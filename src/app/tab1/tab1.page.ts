import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
    constructor(private httpClient: HttpClient) {
        this.httpClient
            .request(
                new HttpRequest(
                    'GET',
                    'https://httpbin.org/redirect-to?url=https%3A%2F%2Fhttpbin.org%2Fget%3Fa%3Dc&status_code=301',
                    {
                        headers: new HttpHeaders({
                            'content-type': 'text/plain',
                        }),
                    },
                ),
            )
            .subscribe(data => {
                console.log('Data', data);
            });
    }

    ngOnInit(): void {}
}
