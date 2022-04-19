/// <reference types="cypress" />

describe("QCM", () => {
  it("Afficher le QCM", () => {
    cy.visit("projet.html");
    cy.get("[data-cy=q1]").should("be.visible");
    cy.get("[data-cy=q1r1]").should("be.visible");
    cy.get("[data-cy=q1r2]").should("be.visible");
    cy.get("[data-cy=q1r3]").should("be.visible");
    cy.get("[data-cy=q2]").should("be.visible");
    cy.get("[data-cy=q2r1]").should("be.visible");
    cy.get("[data-cy=q2r2]").should("be.visible");
    cy.get("[data-cy=q2r3]").should("be.visible");
    cy.get("[data-cy=q2r4]").should("be.visible");
    cy.get("[data-cy=q3]").should("be.visible");
    cy.get("[data-cy=q3r1]").should("be.visible");
  });

  it("Afficher le QCM en sélectionnant les bonnes réponses ", () => {
    cy.visit("projet.html");
    cy.get("[data-cy=q1r2]").click();
    cy.get("[data-cy=q2r1]").click();
    cy.get("[data-cy=q2r2]").click();
    cy.get("[data-cy=q3r1]").select("France");
    cy.get("[data-cy=q3r1]").should("have.value", "france");
    cy.get("[data-cy=valider]").click();
    cy.get("[data-cy=r1]").should(
      "contains.text",
      "La réponse à la première question est correcte"
    );
    cy.get("[data-cy=r2]").should(
      "contains.text",
      "La réponse à la deuxième question est correcte"
    );
  });

  it("Afficher le QCM en sélectionnant les mauvaises réponses ", () => {
    cy.visit("projet.html");
    cy.get("[data-cy=q1r1]").click();
    cy.get("[data-cy=q2r4]").click();
    cy.get("[data-cy=q3r1]").select("Bresil");
    cy.get("[data-cy=q3r1]").should("not.have.value", "france");
    cy.get("[data-cy=valider]").click();
    cy.get("[data-cy=r1]").should(
      "contains.text",
      "La réponse à la première question est incorrecte"
    );
    cy.get("[data-cy=r2]").should(
      "contains.text",
      "La réponse à la deuxième question est incorrecte"
    );
  });
});
