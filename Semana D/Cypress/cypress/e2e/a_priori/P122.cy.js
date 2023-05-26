import AdminMenu from "../../support/elements/adminMenu";
import GeneralSection from "../../support/elements/generalSection";
import jsonData from "./data/P122.json";

const generalSection = new GeneralSection();
const adminMenu = new AdminMenu();

describe("Editar meta título con 71 caracteres.", () => {
  it("Editar meta título con 71 caracteres.", () => {
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

    const metaTitle = jsonData.meta_title;
    const metaDescription = jsonData.meta_description;
    generalSection.editMetaData(metaTitle, metaDescription);
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
    generalSection.metaDescriptionInput.should("have.value", metaDescription);
    generalSection.metaTitleCountDown.contains(metaTitle.length.toString());
    generalSection.metaTitleCountDown
      .should("have.css", "color")
      .and("eq", "rgb(226, 84, 64)");
  });
});
