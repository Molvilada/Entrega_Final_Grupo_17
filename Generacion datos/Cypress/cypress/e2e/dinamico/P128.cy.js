import AdminMenu from "../../support/elements/adminMenu";
import { mockarooService } from "../../support/services";

const adminMenu = new AdminMenu();

describe("Escribir busqueda con caracteres especiales", () => {
    it("Escribir busqueda con caracteres especiales", () => {
        /*
        -------------
          GIVEN
        -------------
        */

        // Autentica un usuario
        cy.login();

        // Va a la pestaña General
        adminMenu.searchButton.click();
        cy.wait(1000);

        /*
        -------------
          WHEN
        -------------
        */

        // Editar meta titulo
        mockarooService("p128").then((res) => {
            const searchQuery = res.body.search_query;
            adminMenu.searchInput.click();
            cy.wait(1000)
            adminMenu.searchInput.type(searchQuery);
            /*
            -------------
              THEN
            -------------
            */
            // Verifica que se no haya resultados
            adminMenu.searchNoResultsMessage.should("exist");
        });
    });
});
