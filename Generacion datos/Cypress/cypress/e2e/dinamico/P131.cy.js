import AdminMenu from "../../support/elements/adminMenu";
import Site from "../../support/elements/site";
import { mockarooService } from "../../support/services";
import PageSection from "../../support/elements/pagesSection";

const pageSection = new PageSection();
const adminMenu = new AdminMenu();
const site = new Site();

describe("Edición del page URL con caracteres especiales", () => {
  it("Edición del page URL con caracteres especiales", () => {
    /* 
    -------------
      GIVEN
    -------------
    */

    // Autentica un usuario que puede crear pages
    cy.login();

    // Va a la pestaña Pages
    adminMenu.pageTab.click();
    cy.wait(1000);

    mockarooService("p081").then((res) => {
      // Crea el page
      const title = res.body.title;
      const content = res.body.body;
      pageSection.createPage(title, content);

      // Publica el page
      pageSection.publishPage();

      /* 
      -------------
        WHEN
      -------------
      */

      // Salir y volver a entrar al page
      pageSection.goBackToPagesSection.click();
      pageSection.pageInList(title).click();

      // Edita la url
      pageSection.editorSettingsButton.click();
      pageSection.settingsUrl.click();
      const exerpt = res.body.excerpt;

      pageSection.settingsUrl
        .clear()
        .type(exerpt, { parseSpecialCharSequences: false });
      pageSection.contentCover.click();
      pageSection.editorUpdateDropdown.click();
      pageSection.editorUpdateButton.click();
      cy.wait(3000);

      /* 
      -------------
        THEN
      -------------
      */
      // Verifica que el url con caracteres especiales no aparezca visible en el page en el sitio
      pageSection.editorSettingsButton.click();
      pageSection.editorViewPage.invoke("attr", "href").then((href) => {
        assert(!href.includes(exerpt));
      });
    });
  });
});
