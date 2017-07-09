import { SegmentPage } from './app.po';

describe('segment App', () => {
  let page: SegmentPage;

  beforeEach(() => {
    page = new SegmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
