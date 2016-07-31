import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

class Location {
  longitude: number;
  latitude: number;

  constructor(longitude: number, latitude: number) {
      this.longitude = longitude;
      this.latitude = latitude;
  }
};

class Trail {
  name: string;
  location: Location;

  constructor(name: string, location: Location) {
      this.name = name;
      this.location = location;
  }
};

@Injectable()
export class TrailStoreService {
  private static URL = 'http://localhost:8080/trails';

  public trailStore: Array<Trail> = [];
  public trailFeed: Observable<Trail>;
  private trailObserver: any;

  constructor(private http: Http) {
    this.trailFeed = new Observable<Trail>(observer => {
      this.trailObserver = observer;
    });
    this.getTrails();
  }

  private getTrails(): void {
    this.http.get(TrailStoreService.URL)
      .map(response => response.json())
      .map(stream => stream.map(res => {
        return new Trail(res.name, new Location(res.location.longitude, res.location.latitude));
      }
      ))
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
