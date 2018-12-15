import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeHttpBackend, NativeHttpFallback, NativeHttpModule } from 'ionic-native-http-connection-backend';
import { HttpBackend, HttpClient, HttpXhrBackend } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NativeHttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend] },
    {
      provide: APP_INITIALIZER,
        useFactory: (httpClient: HttpClient) => () =>
            httpClient.get('https://httpbin.org/get').pipe(
                tap(data => {
                    console.log('Data retrieved under APP_INITIALIZER', data);
                })
            ).toPromise(),
        multi: true,
        deps: [ HttpClient ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
