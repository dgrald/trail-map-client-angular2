import { TrailMapClientAngular2Page } from './app.po';

describe('trail-map-client-angular2 App', function() {
  let page: TrailMapClientAngular2Page;

  beforeEach(() => {
    page = new TrailMapClientAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
