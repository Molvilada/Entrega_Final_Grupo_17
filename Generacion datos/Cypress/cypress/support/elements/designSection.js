export default class DesignSection {
  get labelInput() {
    return cy.get('input[placeholder="Label"]').eq(-2);
  }
  get addButton() {
    return cy.get("button").contains("Add");
  }
  createLink(label) {
    this.labelInput.type(label);
    this.addButton.click({ force: true });
  }
  get saveButton() {
    return cy.get("button").contains("Save");
  }
  verifyNewLabel(label) {
    return cy.get('input[placeholder="Label"]').should(($inputs) => {
      expect($inputs.toArray().some((input) => input.value === label)).to.be
        .true;
    });
  }

  get navigationLabels() {
    return cy.get("#settings-navigation input[placeholder='Label']");
  }

  editLastLabel(newValue) {
    this.navigationLabels.then((inputs) => {
      cy.wait(500);
      cy.wrap(inputs[inputs.length - 2])
        .invoke("val", "")
        .type(newValue);
    });
  }

  get clickLastLabelDeleteButton() {
    return cy
      .get("button")
      .filter(':contains("Delete")')
      .last()
      .then(($button) => {
        cy.wrap($button).click();
      });
  }

  validateDeletedLink(labelValue) {
    cy.get('input[placeholder="Label"]').each(($input) => {
      cy.wrap($input)
        .invoke("val")
        .then((value) => {
          expect(value).to.not.equal(labelValue);
        });
    });
  }
}
