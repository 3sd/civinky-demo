import { ZinkPage } from './app.po';

describe('zink App', () => {
  let page: ZinkPage;

  beforeEach(() => {
    page = new ZinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
