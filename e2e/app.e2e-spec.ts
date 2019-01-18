import { NavicshowPage } from './app.po';

describe('navicshow App', () => {
  let page: NavicshowPage;

  beforeEach(() => {
    page = new NavicshowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
