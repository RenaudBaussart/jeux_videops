// utilisation de vitest pour les tests unitaires
import { describe, it, expect } from 'vitest';
import { lerp, mapLinear, randFloatSpread } from './math.js'; 

describe('Tests Unitaires - Annexe Epitech', () => {
  // list des tests unitaire imposer par le sujet
  it('doit valider la fonction lerp : lerp(1, 3, 20) === 41', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });
  it('doit valider la fonction mapLinear : mapLinear(1, 2, 3, 4, 5) === 3', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  });
  it('doit valider la fonction randFloatSpread : résultat <= 1', () => {
    const result = randFloatSpread(1);
    expect(Math.abs(result)).toBeLessThanOrEqual(1);
  });
});