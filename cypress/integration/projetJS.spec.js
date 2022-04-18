/// <reference types="cypress" />

describe("QCM", () => {
  it("Afficher le QCM", () => {
    cy.visit("/");
    cy.get("[data-cy=q1]").should("be.visible");
    cy.get("[data-cy=q1r1]").should("be.visible");
    cy.get("[data-cy=q1r2]").should("be.visible");
    cy.get("[data-cy=q1r3]").should("be.visible");
    cy.get("[data-cy=q2]").should("be.visible");
    cy.get("[data-cy=q2r1]").should("be.visible");
    cy.get("[data-cy=q2r2]").should("be.visible");
    cy.get("[data-cy=q2r3]").should("be.visible");
    cy.get("[data-cy=q2r4]").should("be.visible");
  });

  it("Afficher le QCM en sélectionnant les bonnes réponses ", () => {
    cy.visit("/");
    cy.get("[data-cy=q1r3]").click();
    cy.get("[data-cy=r1]").should("contains.text", "Bonne reponse");
    cy.get("[data-cy=q2r1]").click();
    cy.get("[data-cy=q2r2]").click();
    cy.get("[data-cy=r2]").should("contains.text", "Bonne reponse");
  });

  it("Afficher le QCM en sélectionnant les mauvaises réponses ", () => {
    cy.visit("/");
    cy.get("[data-cy=q1r1]").click();
    cy.get("[data-cy=r1]").should("contains.text", "Mauvaise reponse");
    cy.get("[data-cy=q1r2]").click();
    cy.get("[data-cy=r1]").should("contains.text", "Mauvaise reponse");
    cy.get("[data-cy=q2r3]").click();
    cy.get("[data-cy=q2r4]").click();
    cy.get("[data-cy=r2]").should("contains.text", "Mauvaise reponse");
  });
});
