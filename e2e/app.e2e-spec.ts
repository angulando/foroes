import { ForoesPage } from './app.po';

describe('foroes App', function() {
  let page: ForoesPage;

  beforeEach(() => {
    page = new ForoesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
