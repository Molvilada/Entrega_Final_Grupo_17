import AdminMenu from "../../support/elements/adminMenu";
import StaffSection from "../../support/elements/staffSection";
import { mockarooService } from "../../support/services";

const adminMenu = new AdminMenu();
const staffSection = new StaffSection();

describe("Editar nombre de usuario", () => {
  it("Editar el nombre de usuario con caracteres especiales", () => {
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

    mockarooService("p094").then((res) => {
      const name = res.body.name;
      // Editar el nombre de usuario del perfil Ghost
      staffSection.nameField.clear();
      cy.wait(1000);
      staffSection.nameField.type(name, { force: true });
      cy.wait(1000);
      // Guardar cambios
      staffSection.saveChanges.click();
      cy.wait(1000);

      /*
      -------------
      THEN
      -------------
      */

      // Verificar que el nombre de usuario se haya editado correctamente
      cy.reload();
      staffSection.nameField.should("have.value", name);
      // Retornar a condiciones iniciales
      staffSection.nameField.clear();
      cy.wait(1000);
      staffSection.nameField.type("Ghost", { force: true });
      staffSection.saveChanges.click();
    });
  });
});
