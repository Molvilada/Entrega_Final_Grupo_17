export default class GeneralSection {
  get titleDescriptionButton() {
    return cy.get(".gh-setting-first button.gh-btn").contains("Expand");
  }

  get titleDescriptionTitleInput() {
    return cy.get(".gh-setting-first input").first();
  }

  get titleDescriptionDescInput() {
    return cy.get(".gh-setting-first input").eq(1);
  }

  get metaDataButton() {
    return cy.contains(".gh-setting-first", "Meta data").find("button.gh-btn");
  }

  get metaTitleInput() {
    return cy.get("#metaTitle");
  }

  get metaTitleCountDown() {
    return cy.contains("div.form-group", "Meta title").find("span.word-count");
  }

  get metaDescriptionInput() {
    return cy.get("#metaDescription");
  }

  get saveButton() {
    return cy.get(".view-actions button");
  }

  get savedSettingsButton() {
    return cy.get("button").contains("Saved");
  }

  get errorMessage() {
    // return cy.get("p.response:not(:hidden)");
    return cy.get("p.response");
  }

  buscarError(mensaje) {
    return cy.get("p.response").contains(mensaje);
  }

  urlMockaroo(testMockaroo) {
    const apiKey = "e7649c20";
    const URL = `https://my.api.mockaroo.com/${testMockaroo}?key=${apiKey}`;
    return URL;
  }

  createDesc(text) {
    cy.wait(1000);
    this.titleDescriptionDescInput.type(text);
    cy.wait(2000);
  }

  editTitleDescriptionMockaroo(testMockaroo) {
    cy.request(this.urlMockaroo(testMockaroo)).then((response) => {
      const description = response.body[0].description;

      this.titleDescriptionButton.click();
      cy.wait(1000);
      this.titleDescriptionDescInput.click();
      this.titleDescriptionDescInput
        .clear({ force: true })
        .type(description, { force: true });
      this.titleDescriptionDescInput.blur();
    });
  }

  editMetaData(title, description) {
    this.metaTitleInput.clear();
    this.metaTitleInput.type(title, { force: true });
    this.metaDescriptionInput.clear();
    this.metaDescriptionInput.type(description, { force: true });
  }
}
