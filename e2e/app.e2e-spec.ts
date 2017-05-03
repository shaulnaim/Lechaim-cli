import { LechaimCliPage } from './app.po';

describe('lechaim-cli App', () => {
  let page: LechaimCliPage;

  beforeEach(() => {
    page = new LechaimCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
