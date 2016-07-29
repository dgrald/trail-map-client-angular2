import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { AppComponent, environment } from './app/';
import { TrailStoreService } from './app/trail-store.service';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  GOOGLE_MAPS_PROVIDERS,
  HTTP_PROVIDERS,
  TrailStoreService
]);
