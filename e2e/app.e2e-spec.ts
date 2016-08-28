import { DuaneleemWebPage } from './app.po';

describe('duaneleem-web App', function() {
  let page: DuaneleemWebPage;

  beforeEach(() => {
    page = new DuaneleemWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
