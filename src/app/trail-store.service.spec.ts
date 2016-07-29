import {
    it,
    inject,
    describe,
    beforeEach,
    beforeEachProviders,
    expect,
} from '@angular/core/testing';
import { Observable } from 'rxjs';
import { BaseRequestOptions, Response, ResponseOptions, RequestMethod, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { TrailStoreService, Trail, Location } from './trail-store.service';
import { provide } from '@angular/core';
import { Any } from './any'

describe('TrailStoreService', () => {
    let trails;

    beforeEachProviders(() => [
        TrailStoreService,
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
            deps: [MockBackend, BaseRequestOptions],
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
        }),
    ]);

    beforeEach(<any>inject([MockBackend], (backend: MockBackend) => {
        trails = [Any.trailObject(), Any.trailObject()];
        const baseResponse = new Response(new ResponseOptions({body: trails}));
        backend.connections.subscribe((c: MockConnection) => {
          if(c.request.url === "http://localhost:8080/trails" && c.request.method === RequestMethod.Get) {
            c.mockRespond(baseResponse);
          }
        });
    }));

    describe('getTrais()', () => {
      it('should return the trails', inject([TrailStoreService], (testService: TrailStoreService) => {
        testService.trailFeed.subscribe(response => {
          expect(response).toEqual(trails);
        });
      }));
    });
});
