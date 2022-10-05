require('cypress-xpath')
const baseUrl = "http://www.musala.com/";
describe("Test case 1", function () {
    before(() => {
        cy.visit(baseUrl)
    });
    it("Test case 1", function () {
        cy.scrollTo('bottom')
        cy.xpath("//span[contains(.,'Contact us')]").click();
        cy.xpath("//input[contains(@id,'cf-1')]").type("test");
        cy.xpath("//input[contains(@id,'cf-4')]").type("test");
        cy.xpath("//textarea[contains(@id,'cf-5')]").type("test");
        cy.xpath("//input[contains(@id,'0')][@name='siwp_captcha_value']").type("YtKRSY");
        cy.xpath("//input[contains(@id,'cf-2')]").type("test");
        cy.xpath("//input[contains(@type,'submit')]").click();
        cy.xpath("//span[contains(@aria-hidden,'true')]").should('have.text', 'The e-mail address entered is invalid.')
        cy.xpath("//input[contains(@id,'cf-2')]").type("test@test");
        cy.xpath("//input[contains(@type,'submit')]").click();
        cy.xpath("//span[contains(@aria-hidden,'true')]").should('have.text', 'The e-mail address entered is invalid.')
        cy.xpath("//input[contains(@id,'cf-2')]").type("test.com");
        cy.xpath("//input[contains(@type,'submit')]").click();
        cy.xpath("//span[contains(@aria-hidden,'true')]").should('have.text', 'The e-mail address entered is invalid.')
        cy.xpath("//input[contains(@id,'cf-2')]").type(".com");
        cy.xpath("//input[contains(@type,'submit')]").click();
        cy.xpath("//span[contains(@aria-hidden,'true')]").should('have.text', 'The e-mail address entered is invalid.')
        cy.xpath("//input[contains(@id,'cf-2')]").type("test@test@com");
        cy.xpath("//input[contains(@type,'submit')]").click();
        cy.xpath("//span[contains(@aria-hidden,'true')]").should('have.text', 'The e-mail address entered is invalid.')
    });
});