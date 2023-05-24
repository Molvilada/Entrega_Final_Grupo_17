import AdminMenu from "../../support/elements/adminMenu";
import StaffSection from "../../support/elements/staffSection";
import { faker } from "@faker-js/faker";

const adminMenu = new AdminMenu();
const staffSection = new StaffSection();
const fbProfile = faker.internet.url();

describe("Editar Facebook de usuario", () => {
    it('Editar el Facebook de usuario con otro URL', () => {
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
        // Editar el Facebook de usuario
        staffSection.facebookField.clear();
        cy.wait(1000);
        staffSection.facebookField.type(fbProfile, { force: true });
        cy.wait(1000);
        // Guardar cambios
        staffSection.saveChanges.click();
        /*
    -------------
    THEN
    -------------
         */
        // Validar que APAREZCA el mensaje de error
        staffSection.noFormatFacebookAlert.should('be.visible');
        // Validar que el botón de guardar esté deshabilitado
        staffSection.saveChanges.should('not.exist');
        // Retornar a condiciones iniciales
        staffSection.facebookField.clear();
        cy.wait(1000);
        staffSection.facebookField.type('https://www.facebook.com/ghost', { force: true });
        staffSection.saveRetry.click();
    });
});