/// <reference types="cypress" />

// Tests out bugs that have been fixed
// so the same bugs don't happen twice

describe('APD builder bugs', { tags: ['@apd'] }, function () {
  let apdUrl;
  let apdId;
  const years = [];

  before(function () {
    cy.updateFeatureFlags({ enableMmis: false, adminCheckFlag: true });
    cy.useStateStaff();
    cy.visit('/');

    cy.findAllByText('Create new').click();
    cy.findByLabelText('APD Name').clear().type('HITECH IAPD').blur();
    cy.findByRole('checkbox', { name: /Annual Update/i }).click();
    cy.findByRole('button', { name: /Create an APD/i }).click();

    cy.findByRole(
      'heading',
      { name: /APD Overview/i },
      { timeout: 100000 }
    ).should('exist');
    cy.location('pathname').then(pathname => {
      apdUrl = pathname.replace('/apd-overview', '');
      apdId = apdUrl.split('/').pop();
    });

    cy.get('[data-cy=yearList]').within(() => {
      cy.get('[type="checkbox"][checked]').each((_, index, list) =>
        years.push(list[index].value)
      );
    });
  });

  beforeEach(function () {
    cy.wrap(apdUrl).as('apdUrl');
    cy.wrap(apdId).as('apdId');
    cy.wrap(years).as('years');

    cy.useStateStaff();
    cy.visit(apdUrl);
  });

  after(function () {
    cy.visit('/');
    cy.deleteAPD(this.apdId);
  });

  it('tests out FTE number bug, #4168', function () {
    cy.get('#continue-button').click();
    cy.get('.ds-h2').should('contain', 'Key State Personnel');

    cy.findByRole('button', { name: 'Add Primary Contact' }).click();
    cy.get('input[type="radio"][value="yes"]').check({ force: true });

    cy.get('[data-cy="key-person-0-0__fte"]').type('0.001');
    cy.get('[data-cy="key-person-0-1__fte"]').click(); //Triggers blur
    cy.get('[data-cy="key-person-0-0__fte"]').should('have.value', 0.001);
  });

  it('tests uploading an image', function () {
    cy.intercept('POST', `${Cypress.env('API')}/apds/${this.apdId}/files`).as(
      'uploadImage'
    );
    cy.intercept('GET', `${Cypress.env('API')}/apds/${this.apdId}/files/*`).as(
      'loadImage'
    );

    cy.get('[class="tox-edit-area"]').eq(3).scrollIntoView();

    // Uploads cms-logo.png from /fixtures/
    cy.setTinyMceContent('mmis-overview-field', 'Drag and Drop here');

    cy.enter('iframe[id="mmis-overview-field_ifr"]').then(getBody => {
      cy.fixture('cms-logo.png', 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then(fileContent => {
          const file = new File([fileContent], 'cms-logo.png', {
            type: 'image/png'
          });

          getBody()
            .contains('Drag and Drop here')
            .trigger('drop', {
              dataTransfer: {
                files: [file]
              }
            });
        });
    });

    cy.wait('@uploadImage', { timeout: 30000 });

    cy.waitForSave();
    cy.contains('AK APD Home').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // Gives time to load the APD dashboard

    cy.visit(this.apdUrl);
    cy.wait('@loadImage', { timeout: 90000 });

    cy.contains('Export and Submit').click();
    cy.findByRole('button', { name: 'Continue to Review' }).click();
    cy.wait('@loadImage', { timeout: 30000 });
  });
});
