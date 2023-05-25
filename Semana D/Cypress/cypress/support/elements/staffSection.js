export default class StaffSection {
    get ghostStaffMember() {
        return cy.get("h3").contains("Ghost");
    }
    get staffProfileConfiguration() {
        return cy.get("button").contains("User Settings");
    }
    get clickInSuspendStaffMember() {
        return cy.get("button").contains("Suspend User");
    }
    get suspendStaffMember() {
        return cy.get("button").contains("Suspend");
    }
    get ClickInUnSuspendStaffMember() {
        return cy.get("button").contains("Un-suspend User")
    }
    get unSuspendStaffMember() {
        return cy.get("button").contains("Un-suspend");
    }
    get verifyUnsuspendedMember() {
        return cy
            .get("span")
            .contains("Suspended")
            .should("not.exist");
    }
    get obtainRoleOptions() {
        return cy.get('select#new-user-role');
    }
    get saveChanges() {
        return cy.get('span').contains('Save');
    }
    get saveRetry(){
        return cy.get('span').contains('Retry');
    }
    get verifyChangedRole() {
        return cy.get('#new-user-role')
            .should('contain', 'Contributor');
    }
    get nameField() {
        return cy.get('input[placeholder="Full Name"]');
    }
    get blankNameAlert() {
        return cy.get('p').contains('Please enter a name.');
    }

    get nameTooLongAlert() {
        return cy.get('p').contains('Name is too long');
    }
    get emailField() {
        return cy.get('input[placeholder="Email Address"]');
    }
    get noFormatEmailAlert() {
        return cy.get('p').contains('Please supply a valid email address');
    }
    get userLocationField() {
        return cy.get('input[id="user-location"]');
    }
    get locationTooLongAlert() {
        return cy.get('p').contains('Location is too long');
    }
    get noFormatLocationAlert() {
        return cy.get('p').contains('Location is invalid');
    }
    get websiteField() {
        return cy.get('input[id="user-website"]');
    }
    get noFormatWebsiteAlert() {
        return cy.get('p').contains('Website is not a valid url');
    }
    get facebookField() {
        return cy.get('input[id="user-facebook"]');
    }
    get noFormatFacebookAlert() {
        return cy.get('p').contains('Facebook Profile is not a valid url');
    }
    get noProfileFacebookAlert() {
        return cy.get('div').contains('object null is not iterable (cannot read property Symbol(Symbol.iterator))');
    }
    get bioField() {
        return cy.get('textarea[id="user-bio"]');
    }
    get bioTooLongAlert() {
        return cy.get('p').contains('Bio is too long');
    }
    get twitterField() {
        return cy.get('input[id="user-twitter"]');
    }

    get editorContainerPass() {
        return cy.get('#user-password-new');
    }
    
    get editorContainerNewPass() {
        return cy.get('#user-new-password-verification');
    }

    staffInList() {
        return cy
          .get(".apps-grid-cell.tooltip-centered")
          .filter(`:contains(Ghost)`)
          .first();
      }
      
      get changePass() {
        return cy.get("button").contains("Change Password");
        //return cy.get("a").contains("Change Password", {force: true});
      }  

      urlMockaroo(testMockaroo) {
        const apiKey = "e7649c20";
        const URL = `https://my.api.mockaroo.com/${testMockaroo}?key=${apiKey}`;
        return URL;
      }   
      
      getDinamicBioMockaroo(testMockaroo) {
        return cy.request(this.urlMockaroo(testMockaroo)).then((response) => {
          const { bio } = response.body;    
          return {
            bio,
          };
        });
      }

      replacePass(newpass) {                
        this.editorContainerPass.type(newpass);
        this.editorContainerNewPass.type(newpass);        
      }
}