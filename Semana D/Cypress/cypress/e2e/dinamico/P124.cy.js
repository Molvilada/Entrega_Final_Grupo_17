import AdminMenu from "../../support/elements/adminMenu";
import StaffSection from "../../support/elements/staffSection";

const adminMenu = new AdminMenu();
const staffSection = new StaffSection();
const twProfile = 'https://www.twitter.com/';

describe("Editar Twitter de usuario", () => {
    it('Editar el Twitter de usuario con expresiones regulares', () => {
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
        const testMockaroo = '/p124.json';
        staffSection.getDinamicTwMockarooRE(testMockaroo).then((bioData) => {
            const tw = bioData.twProfile;
            console.log(tw);
            const toEvaluated = twProfile + tw;
            staffSection.twitterField.type(toEvaluated, {
                force: true
            });
            cy.wait(1000);

            staffSection.saveChanges.click();
            /*
    -------------
    THEN
    -------------
             */
            // Verificar que el Twitter de usuario se haya actualizado
            cy.reload();
            cy.wait(1000);
            staffSection.twitterField.should('have.value', 'https://twitter.com/' + tw);
            // Retornar a condiciones iniciales
            staffSection.twitterField.clear();
            cy.wait(1000);
            staffSection.twitterField.type('https://www.twitter.com/ghost', {
                    force: true
                }
            );
            staffSection.saveChanges.click();
        });
    });
});