describe('Two Ships Passing In The Night - E2E Tests', () => {

  // Ignorer l'erreur de sécurité du verrouillage du pointeur du navigateur pendant les tests automatisés
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.toLowerCase().includes('pointer lock')) {
      // Retourner false empêche Cypress d'échouer le test
      return false;
    }
    // Laisser les autres vraies erreurs échouer le test normalement
    return true;
  });

  beforeEach(() => {
    // Visiter la page du jeu avant chaque test
    cy.visit('http://localhost:5000');
  });

  it('should successfully render the game canvas', () => {
    // Vérifier que le canvas est présent
    cy.get('canvas').should('be.visible');
  });

  it('should allow player to interact with the game via keyboard', () => {
    // Cliquer sur l'overlay pour démarrer le jeu
    cy.get('.r').click();
    
    // Déclencher la flèche haut pour tester les entrées du clavier
    cy.get('body').trigger('keydown', { keyCode: 38 });
    
    // Vérifier que le canvas est toujours visible après l'interaction
    cy.get('canvas').should('be.visible');
  });

  it('should successfully render the game elements', () => {
    // Vérifier que les éléments du jeu sont présents
    cy.get('.h').should('be.visible');
  });
});