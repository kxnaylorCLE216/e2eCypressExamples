describe("Reg form", () => {
    it("enter some value", () =>{
        cy.visit('https://qavbox.github.io/demo/signup');
        cy.get("#username").type("qabox");
        cy.get("input[name='home']").click();
    })
});