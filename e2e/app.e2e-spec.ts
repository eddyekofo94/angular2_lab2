import { Angular2Lab2Page } from './app.po';

describe('angular2-lab2 App', function() {
  let page: Angular2Lab2Page;

  beforeEach(() => {
    page = new Angular2Lab2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
