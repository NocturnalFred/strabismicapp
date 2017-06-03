import { StrabismicappPage } from './app.po';

describe('strabismicapp App', function() {
  let page: StrabismicappPage;

  beforeEach(() => {
    page = new StrabismicappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
