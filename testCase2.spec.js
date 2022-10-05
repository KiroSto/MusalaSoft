require('cypress-xpath')
const baseUrl = "http://www.musala.com/";
describe("Test case 2", function () {
    before(() => {
        cy.visit(baseUrl)
    });
    it("Test case 2", function () {
        cy.xpath("(//a[@class='main-link'][contains(.,'Company')])[4]").click();
        cy.url().should('include', 'https://www.musala.com/company/')
        cy.xpath("//h2[contains(.,'Leadership')]").should("exist");
        cy.xpath("//span[contains(@class,'musala musala-icon-facebook')]").click();
        cy.url().should('include', 'https://www.facebook.com/MusalaSoft?fref=ts')
        cy.xpath("//circle[contains(@fill,'transparent')]").should("exist");
    });
});
