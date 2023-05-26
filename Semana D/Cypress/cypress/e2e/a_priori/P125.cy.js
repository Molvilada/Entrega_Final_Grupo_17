import AdminMenu from "../../support/elements/adminMenu";
import StaffSection from "../../support/elements/staffSection";
import jsonData from "./data/P125.json";

const adminMenu = new AdminMenu();
const staffSection = new StaffSection();
const profile = jsonData.profile;

describe("Editar Twitter de usuario", () => {
    it('Editar el Twitter de usuario con URL diferente a twitter.com', () => {
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
        // Editar el Twitter de usuario
        staffSection.twitterField.clear();
        cy.wait(1000);
        staffSection.twitterField.type(profile, {force: true});
        cy.wait(1000);
        staffSection.saveChanges.click();
        /*
    -------------
    THEN
    -------------
         */
        // Validar que APAREZCA el mensaje de error
        staffSection.noFormatTwitterAlert.should('exist');
        // Validar que el botón de guardar esté deshabilitado
        staffSection.saveChanges.should('not.exist');
        cy.wait(5000);
        // Retornar a condiciones iniciales
        staffSection.twitterField.clear();
        cy.wait(1000);
        staffSection.twitterField.type('https://www.twitter.com/ghost', {force: true});
        staffSection.saveRetry.click();
    });
});