import { levels } from '../fixtures/levels';

describe('Flexbox Froggy', () => {
  it.skip('Should open page', () => {
    cy.visit('https://flexboxfroggy.com');
    cy.get('.title').should('contain', 'Flexbox Froggy');
  });

  const testLevel = (levelNumber) => {
    cy.visit('https://flexboxfroggy.com');
    cy.get('#level-indicator').click();
    cy.get(`.level-marker[data-level="${levelNumber}"]`).click();
    cy.get('#editor textarea').type(levels[levelNumber].join('\n'));
    cy.get('#next').should('not.have.class', 'disabled');
  };

  it.skip('Should validate first task', () => {
    testLevel(0);
  });

  it.skip('Should validate second task', () => {
    testLevel(1);
  });

  it.skip('Should validate third task', () => {
    testLevel(2);
  });

  it.skip('Should validate forth task', () => {
    testLevel(3);
  });

  it.skip('Should validate fifth task', () => {
    testLevel(4);
  });

  it.skip('Should validate sixth task', () => {
    testLevel(5);
  });

  it.skip('Should validate seventh task', () => {
    testLevel(6);
  });

  it.skip('Should validate eighth task', () => {
    testLevel(7);
  });

  it.skip('Should validate nineth task', () => {
    testLevel(8);
  });

  it.skip('Should validate tenth task', () => {
    testLevel(9);
  });

  it.skip('Should validate eleventh task', () => {
    testLevel(10);
  });

  it.skip('Should validate twelfth task', () => {
    testLevel(11);
  });

  it.skip('Should validate thirteenth task', () => {
    testLevel(12);
  });

  it.skip('Should validate forteenth task', () => {
    testLevel(13);
  });

  it.skip('Should validate fifteenth task', () => {
    testLevel(14);
  });

  it.skip('Should validate sixteenth task', () => {
    testLevel(15);
  });

  it.skip('Should validate seventeenth task', () => {
    testLevel(16);
  });

  it.skip('Should validate eighteenth task', () => {
    testLevel(17);
  });

  it.skip('Should validate nineteenth task', () => {
    testLevel(18);
  });

  it.skip('Should validate twentyth task', () => {
    testLevel(19);
  });

  it.skip('Should validate twenty first task', () => {
    testLevel(20);
  });

  it.skip('Should validate twenty second task', () => {
    testLevel(21);
  });

  it.skip('Should validate twenty third task', () => {
    testLevel(22);
  });

  it.skip('Should validate twenty fourth task', () => {
    testLevel(23);
  });
});
