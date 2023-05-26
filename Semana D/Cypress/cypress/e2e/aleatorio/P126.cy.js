import AdminMenu from "../../support/elements/adminMenu";
import StaffSection from "../../support/elements/staffSection";
import { faker } from "@faker-js/faker";

const adminMenu = new AdminMenu();
const staffSection = new StaffSection();
const name = faker.name.firstName();
const twitter = 'https://twitter.com/' + name;

describe("Editar Twitter de usuario", () => {
    it("Editar el Twitter de usuario con perfil válido", () => {
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
        staffSection.twitterField.type(twitter, { force: true });
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
        staffSection.twitterField.should("have.value", twitter);
        // Retornar a condiciones iniciales
        staffSection.twitterField.clear();
        cy.wait(1000);
        staffSection.twitterField.type("https://www.twitter.com/ghost", {
            force: true,
        });
        staffSection.saveChanges.click();
    });
});