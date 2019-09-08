import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  constructor(
      private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get('https://httpbin.org/image', {
      headers: new HttpHeaders({
        accept: 'image/*',
      }),
      responseType: 'blob'
    }).subscribe((data) => {
      console.log('Data', data);
    });
  }
}
