import { Angular2Jasmine2Page } from './app.po';

describe('angular2-jasmine2 App', () => {
  let page: Angular2Jasmine2Page;

  beforeEach(() => {
    page = new Angular2Jasmine2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
