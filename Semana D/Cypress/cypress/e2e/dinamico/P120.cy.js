import AdminMenu from "../../support/elements/adminMenu";
import GeneralSection from "../../support/elements/generalSection";
import { mockarooService } from "../../support/services";

const generalSection = new GeneralSection();
const adminMenu = new AdminMenu();

describe("Editar meta descripción con sin caracteres.", () => {
  it("Editar meta descripción con sin caracteres.", () => {
    /* 
    -------------
      GIVEN
    -------------
    */

    // Autentica un usuario
    cy.login();

    // Va a la pestaña General
    adminMenu.generalTab.click();
    cy.wait(1000);

    // Expandir sección meta data
    generalSection.metaDataButton.click();

    /* 
    -------------
      WHEN
    -------------
    */

    // Editar meta titulo
    mockarooService("p120").then((res) => {
      const metaTitle = res.body.meta_title;
      generalSection.editMetaDataEmpty(metaTitle);
      generalSection.saveButton.click();
      /* 
      -------------
        THEN
      -------------
      */
      // Verifica que se guarde
      generalSection.savedSettingsButton.should("exist");
      cy.reload();
      cy.wait(1000);
      generalSection.metaDataButton.click();
      generalSection.metaTitleInput.should("have.value", metaTitle);
      generalSection.metaTitleCountDown.contains(metaTitle.length.toString());
    });
  });
});
