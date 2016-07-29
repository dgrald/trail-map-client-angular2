import { Component, OnInit, SimpleChanges, Input, Inject, DoCheck } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'map-component',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class MapComponent implements OnInit {

  @Input() trails: any[];

  ngOnInit() {
    
  }
}
