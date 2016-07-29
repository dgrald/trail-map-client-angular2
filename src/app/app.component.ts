import { Component, OnInit } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { Observable } from 'rxjs';
import { TrailStoreService } from './trail-store.service';
import { MapComponent } from './map.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES, MapComponent]
})
export class AppComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  trails: Array<any> = [];

  constructor(private trailStoreService: TrailStoreService) {
    this.trails = this.trailStoreService.trailStore;
  }

  ngOnInit() {
    this.trailStoreService.trailFeed.subscribe(newTrail => {
      this.trails.push(newTrail);
    });
  }

}
