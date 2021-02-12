
describe('page has loaded', function () {

  it('should load page', function () {
    cy.visit('http://localhost:3000/');
  });

  it('should has text', function () {
    cy.contains('Hello');
  });
});