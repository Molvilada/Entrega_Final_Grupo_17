import AdminMenu from "../../support/elements/adminMenu";
import StaffSection from "../../support/elements/staffSection";

const adminMenu = new AdminMenu();
const staffSection = new StaffSection();
const fbProfile = 'https://www.facebook.com/';

describe("Editar Facebook de usuario", () => {
    it('Editar el Facebook de usuario con caracteres especiales', () => {
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
        const testMockaroo = '/p110.json';
        staffSection.getDinamicFaceMockaroo(testMockaroo).then((bioData) => {
            const fb = bioData.fbProfile;
            staffSection.facebookField.type(fbProfile + fb, {
                force: true
            });
            cy.wait(1000);
            // Guardar cambios
            staffSection.saveChanges.click();
            /*
    -------------
    THEN
    -------------
         */
            // Validar que APAREZCA el mensaje de error
            staffSection.noProfileFacebookAlert.should('exist');
            // Validar que el botón de guardar esté deshabilitado
            staffSection.saveChanges.should('not.exist');
            cy.wait(5000);
            // Retornar a condiciones iniciales
            staffSection.facebookField.clear();
            cy.wait(1000);
            staffSection.facebookField.type('https://www.facebook.com/ghost', {
                force: true
            });
            staffSection.saveRetry.click();
        });
    });
});