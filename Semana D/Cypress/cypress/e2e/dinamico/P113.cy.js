import AdminMenu from "../../support/elements/adminMenu";
import StaffSection from "../../support/elements/staffSection";
import { mockarooService } from "../../support/services";

const adminMenu = new AdminMenu();
const staffSection = new StaffSection();

describe("Editar biografía de usuario", () => {
  it("Editar la biografía de usuario con caracteres especiales", () => {
    /*
    -------------
    GIVEN
    -------------
    */

    // Autenticar usuario
    cy.login();
    // Ir a la pestaña Staff
    adminMenu.staffTab.click();
    cy.wait(1000);
    staffSection.ghostStaffMember.click();
    cy.wait(1000);

    /*
    -------------
    WHEN
    -------------
    */

    mockarooService("p113").then((res) => {
      const bio = res.body.bio;
      // Editar la biografía de usuario
      staffSection.bioField.clear();
      cy.wait(1000);
      staffSection.bioField.type(bio, { force: true });
      cy.wait(1000);
      // Guardar cambios
      staffSection.saveChanges.click();

      /*
      -------------
      THEN
      -------------
      */

      // Verificar que la biografía de usuario se haya actualizado
      cy.reload();
      cy.wait(1000);
      staffSection.bioField.should("have.value", bio);
      // Retornar a condiciones iniciales
      staffSection.bioField.clear();
      cy.wait(1000);
      staffSection.bioField.type("I am a ghost", { force: true });
      staffSection.saveChanges.click();
    });
  });
});
