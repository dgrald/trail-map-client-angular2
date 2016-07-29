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
  private static URL = 'http://localhost:8080/trails';

  public trailStore: Array<any> = [];
  public trailFeed: Observable<any>;
  private trailObserver: any;

  constructor(private http: Http) {
    this.trailFeed = new Observable(observer => {
      this.trailObserver = observer;
    });
    this.getTrails();
  }

  private getTrails(): void {
    this.http.get(TrailStoreService.URL)
      .map(response => {console.log(response); return response.json();})
      .map(stream => stream.map(res => {
        return {
          name: res.name,
          location: {
              longitude: res.location.longitude,
              latitude: res.location.latitude
          }
        }
      }))
      .subscribe(
        trails => {
          this.trailStore = trails;
          trails.forEach(trail => this.trailObserver.next(trail))
        },
        error => console.log(error)
      );
  }

  addTrail(trail: any): void {
    this.trailObserver.next(trail);
  }

};
