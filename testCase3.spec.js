require('cypress-xpath')
const baseUrl = "http://www.musala.com/";
describe("Test case 3", function () {
    before(() => {
        cy.visit(baseUrl)
    });
    it("Test case 3", function () {
        cy.xpath("(//a[@class='main-link'][contains(.,'Careers')])[4]").click();
        cy.xpath("//span[contains(@data-alt,'Check our open positions')]").click();
        cy.url().should('include', 'https://www.musala.com/careers/join-us/')
        cy.xpath("//select[contains(@id,'get_location')]").select('Anywhere');
        cy.xpath("(//img[contains(@alt,'Automation QA Engineer')])[2]").click();
        cy.xpath("//h2[contains(.,'General description')]").should("exist");
        cy.xpath("//h2[contains(.,'Requirements')]").should("exist");
        cy.xpath("//h2[contains(.,'Responsibilities')]").should("exist");
        cy.xpath("//h2[contains(.,'What we offer')]").should("exist");
        cy.scrollTo('bottom')
        cy.xpath("//input[contains(@value,'Apply')]").should("exist");
        cy.xpath("//input[contains(@value,'Apply')]").click();
        cy.xpath("//input[contains(@id,'adConsentChx')]").click();
        cy.xpath("//input[contains(@value,'Send')]").click();
        cy.xpath("//button[@class='close-form'][contains(.,'Close')]").click();
        cy.xpath("(//span[contains(@aria-hidden,'true')])[1]").should('have.text', 'The field is required')
        cy.xpath("(//span[contains(@aria-hidden,'true')])[2]").should('have.text', 'The field is required')
        cy.xpath("(//span[contains(@aria-hidden,'true')])[3]").should('have.text', 'The field is required')
        cy.xpath("//span[contains(@data-name,'your-message')]").should('have.text', 'The field is required')
        cy.xpath("//input[contains(@id,'cf-1')]").type("test");
        cy.xpath("//input[contains(@id,'cf-2')]").type("test@test.com");
        cy.xpath("//input[contains(@id,'cf-3')]").type("test");
        cy.xpath("//textarea[contains(@id,'cf-6')]").type("test");
        cy.xpath("//input[contains(@value,'Send')]").click();
        cy.xpath("//button[@class='close-form'][contains(.,'Close')]").click();
        cy.xpath("//span[contains(@aria-hidden,'true')]").should('have.text', 'The telephone number is invalid')
        cy.xpath("//input[contains(@id,'cf-3')]").clear().type("123");
        cy.xpath("//input[contains(@id,'cf-2')]").clear().type("test");
        cy.xpath("//input[contains(@value,'Send')]").click();
        cy.xpath("//button[@class='close-form'][contains(.,'Close')]").click();
        cy.xpath("//span[contains(@aria-hidden,'true')]").should('have.text', 'The e-mail address entered is invalid')
    });
});

