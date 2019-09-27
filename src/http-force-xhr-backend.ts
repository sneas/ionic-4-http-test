import { HttpXhrBackend, HttpBackend, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NativeHttpFallback } from 'ionic-native-http-connection-backend';

@Injectable()
export class HttpForceXhrBackend implements HttpBackend {
    constructor(
        private native: NativeHttpFallback,
        private xhr: HttpXhrBackend,
    ) {}

    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        if (req.headers.has('XHR-please')) {
            return this.xhr.handle(req);
        } else {
            return this.native.handle(req);
        }
    }
}
