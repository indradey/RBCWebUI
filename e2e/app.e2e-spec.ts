import { RBCJobsWebUIPage } from './app.po';

describe('rbcjobs-web-ui App', function() {
  let page: RBCJobsWebUIPage;

  beforeEach(() => {
    page = new RBCJobsWebUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
