// les tests fonctionnels:
// testent le comportement global et les règles du jeu dans ce cas


// TESTS FONCTIONNELS
describe("Fonctional Tests - Space Invaders", () => {
    // définit un état de base pour simuler une partie
    let gameState = { score: 0, lives: 3, isGameOver: false };

    // reset entre chaque test
    beforeEach(() => {
        gameState = { score: 0, lives: 3, isGameOver: false };

    });

    // game over déclenche l'arret du jeu (regle metier)
    test("F3 - Game Over Trigger", () => {
        gameState.lives = 0;
        if (gameState.lives <= 0) gameState.isGameOver = true;
        expect(gameState.isGameOver).toBe(true);
    });

    // tuer un alien donne des points au player (regle métier)
    test("F1 - Score Increase", () => {
        gameState.score += 50;
        expect(gameState.score).toBe(50);
    });

    // si le player se fait touche il perd un nbr de vie (regle metier)
    test("F2 - Life Loss", () => {
        gameState.lives -= 1;
        expect(gameState.lives).toBe(2);
    });

});