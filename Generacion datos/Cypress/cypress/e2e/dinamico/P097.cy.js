import AdminMenu from "../../support/elements/adminMenu";
import StaffSection from "../../support/elements/staffSection";
import { mockarooService } from "../../support/services";

const adminMenu = new AdminMenu();
const staffSection = new StaffSection();

describe("Editar email de usuario", () => {
  it("Editar el email de usuario con emaio con caracteres especiales", () => {
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

    mockarooService("p097").then((res) => {
      const email = res.body.email + "@" + "email" + ".com";
      // Editar el email de usuario del perfil Ghost
      staffSection.emailField.clear();
      cy.wait(1000);
      staffSection.emailField.type(email, { force: true });
      cy.wait(1000);
      // Guardar cambios
      staffSection.saveChanges.click();
      cy.wait(1000);

      /*
      -------------
      THEN
      -------------
      */

      // Verificar que APAREZCA el mensaje de error
      staffSection.noFormatEmailAlert.should("be.visible");
      // Verificar que el botón de guardar cambios esté deshabilitado
      staffSection.saveChanges.should("not.exist");
      // Retornar a condiciones iniciales
      staffSection.emailField.clear();
      cy.wait(1000);
      staffSection.emailField.type("example@email.com", { force: true });
      staffSection.saveRetry.click();
    });
  });
});
