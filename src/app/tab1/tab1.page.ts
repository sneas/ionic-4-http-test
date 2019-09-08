import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  constructor(
      private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get('https://httpbin.org/get').subscribe((data) => {
      console.log('Data', data);
    });
  }
}
