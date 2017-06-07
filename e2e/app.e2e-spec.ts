import { UsuariosAlbunPostPage } from './app.po';

describe('usuarios-albun-post App', () => {
  let page: UsuariosAlbunPostPage;

  beforeEach(() => {
    page = new UsuariosAlbunPostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
