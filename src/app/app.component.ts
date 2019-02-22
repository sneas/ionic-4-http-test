import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private httpClient: HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
      this.platform.ready().then(() => {
          this.statusBar.styleDefault();
          this.splashScreen.hide();
      });

      const post_payload = {
          parameter: 'example = string'
      };
      const data = new URLSearchParams();
      data.append('post', JSON.stringify(post_payload));

      this.httpClient.post('https://httpbin.org/post', data.toString()).subscribe((res) => {
          console.log('Response', res);
      });
  }
}
