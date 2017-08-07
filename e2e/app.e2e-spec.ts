import { YtSideProjPage } from './app.po';

describe('yt-side-proj App', function() {
  let page: YtSideProjPage;

  beforeEach(() => {
    page = new YtSideProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
