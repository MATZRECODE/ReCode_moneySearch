import { RecodeProjectPage } from './app.po';

describe('recode-project App', function() {
  let page: RecodeProjectPage;

  beforeEach(() => {
    page = new RecodeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
