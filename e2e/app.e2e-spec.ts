import { NCFWebAppPage } from './app.po';

describe('ncf-web-app App', () => {
  let page: NCFWebAppPage;

  beforeEach(() => {
    page = new NCFWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
