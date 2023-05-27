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

  get generalTab() {
    return cy.get("a").contains("General");
  }

  get tagTab() {
    return cy.get("a").contains("Tags");
  }

  get tagIntegrations() {
    return cy.get("a").contains("Integrations");
  }

  get designTab() {
    return cy.get("a").contains("Design");
  }

  get generalTab() {
    return cy.get("a").contains("General");
  }

  get searchButton() {
    return cy.get("button.gh-nav-btn-search");
  }

  get searchInput() {
    return cy.get('input[placeholder="Search site..."]');
  }

  get searchNoResultsMessage() {
    return cy.get('li.ember-power-select-option--no-matches-message');
  }
}
