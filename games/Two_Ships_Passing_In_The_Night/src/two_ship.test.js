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
describe('Tests Unitaires - 5 test personnalises', () => {
  // list des tests unitaire personnalise
  it('doit valider la fonction lerp : lerp(0, 10, 0.5) === 5', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });
  it('doit valider la fonction mapLinear : mapLinear(5, 0, 10, 0, 100) === 50', () => {
    expect(mapLinear(5, 0, 10, 0, 100)).toBe(50);
  });
  it('doit valider la fonction randFloatSpread : résultat <= 0.5', () => {
    const result = randFloatSpread(1);
    expect(Math.abs(result)).toBeLessThanOrEqual(0.5);
  });
  it('doit valider la fonction randFloatSpread : résultat >= -0.5', () => {
    const result = randFloatSpread(1);
    expect(Math.abs(result)).toBeGreaterThanOrEqual(-0.5);
  });
  it('doit valider la fonction lerp : lerp(10, 20, 0.25) === 12.5', () => {
    expect(lerp(10, 20, 0.25)).toBe(12.5);
  });
});
  