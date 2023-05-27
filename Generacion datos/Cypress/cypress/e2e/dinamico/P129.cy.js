import PostSection from "../../support/elements/postsSection";
import AdminMenu from "../../support/elements/adminMenu";
import Site from "../../support/elements/site";
import { mockarooService } from "../../support/services";

const postSection = new PostSection();
const adminMenu = new AdminMenu();
const site = new Site();

describe("Edición del post URL con caracteres especiales", () => {
  it("Edición del post URL con caracteres especiales", () => {
    /* 
    -------------
      GIVEN
    -------------
    */

    // Autentica un usuario que puede crear posts
    cy.login();

    // Va a la pestaña Posts
    adminMenu.postTab.click();
    cy.wait(1000);

    mockarooService("p081").then((res) => {
      // Crea el post
      const title = res.body.title;
      const content = res.body.body;
      postSection.createPost(title, content);

      // Publica el post
      postSection.publishPost();

      /* 
      -------------
        WHEN
      -------------
      */

      // Salir y volver a entrar al post
      postSection.goBackToPostsSection.click();
      postSection.postInList(title).click();

      // Edita la url
      postSection.editorSettingsButton.click();
      postSection.settingsUrl.click();
      const exerpt = res.body.excerpt;

      postSection.settingsUrl
        .clear()
        .type(exerpt, { parseSpecialCharSequences: false });
      postSection.contentCover.click();
      postSection.editorUpdateDropdown.click();
      postSection.editorUpdateButton.click();
      cy.wait(3000);

      /* 
      -------------
        THEN
      -------------
      */
      // Verifica que el url con caracteres especiales no aparezca visible en el post en el sitio
      postSection.editorSettingsButton.click();
      postSection.editorViewPost.invoke("attr", "href").then((href) => {
        assert(!href.includes(exerpt));
      });
    });
  });
});
