import { levels } from '../fixtures/levels';

describe('Flexbox Defence', () => {
  it('Should open page', () => {
    cy.visit('http://www.flexboxdefense.com');
    cy.get('.header__title').should('contain', 'Flexbox Defense');
  });

  const testLevel = (levelNumber) => {
    cy.visit('http://www.flexboxdefense.com');
    cy.get('body').then(($body) => {
      if ($body.find('.modal__instructions').length) {
        cy.get('.modal__button').contains('Ok, got it!').click();
      }
    });
    cy.get('.nav__button--selector').click();
    cy.get('.menu__wave-link')
      .contains(levelNumber + 1)
      .click();
    cy.get('body').then(($body) => {
      if ($body.find('.modal__instructions').length) {
        cy.get('.modal__button').contains('Ok, got it!').click();
      }
    });
    cy.get('.ember-text-field').eq(0).type(levels[levelNumber][0]);
    cy.get('.ember-text-field').eq(0).blur();
    for (let j = 1; j < levels[levelNumber].length; j++) {
      if (!levels[levelNumber][j]) {
        cy.get('.ember-text-field').eq(j).blur();
        continue;
      }
      cy.get('.ember-text-field').eq(j).type(levels[levelNumber][j]);
      cy.get('.ember-text-field').eq(j).blur();
    }
    cy.get('.stylesheet__start-wave-button')
      .contains('Start Wave')
      .trigger('click');
    cy.get('.stylesheet__cancel-wave-button').should('be.visible');
    cy.get('.modal__button', { timeout: 30000 })
      .contains('Next wave')
      .should('be.visible');
  };

  it('Should validate first task', () => {
    testLevel(0);
  });

  it('Should validate second task', () => {
    testLevel(1);
  });

  it('Should validate third task', () => {
    testLevel(2);
  });

  it('Should validate forth task', () => {
    testLevel(3);
  });

  it('Should validate fifth task', () => {
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
