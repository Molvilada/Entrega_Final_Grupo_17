export default class AdminMenu {
  get pageTab() {
    return cy.get("a").contains("Pages");
  }
  
  get staffTab() {
    return cy.get("a").contains("Staff");
  }

  get postTab() {
    return cy.get("a").contains("Posts");
  }

  get tagTab() {
    return cy.get("a").contains("Tags");
  }

  get designTab() {
    return cy.get("a").contains("Design");
  }


}
