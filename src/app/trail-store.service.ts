import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export type Location = {
  longitude: number,
  latitude: number
};

export type Trail = {
  name: string,
  location: Location
};

@Injectable()
export class TrailStoreService {
  private static URL = 'http://localhost:9000/trails';

  constructor(private http: Http) {}

  public getTrails(): Observable<any> {
    return this.http.get(TrailStoreService.URL)
      .map(response => response.json());
  }
};
