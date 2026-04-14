// fichier servant a :

// fonctions mathématiques du jeu 
const clamp = (min, max, val) => Math.max(min, Math.min(max, val));

const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

const dot = (v1, v2) => v1.x * v2.x + v1.y * v2.y;

const add = (v1, v2) => ({ x: v1.x + v2.x, y: v1.y + v2.y })

const subtract = (v1, v2) => ({ x: v1.x - v2.x, y: v1.y - v2.y });

const distance = (p1, p2) =>
    Math.sqrt(Math.pow(p2.angle - p1.angle, 2) + Math.pow(p2.radius - p1.radius, 2));

const toVector = (p) => ({
    x: p.radius * Math.cos(p.angle),
    y: p.radius * Math.sin(p.angle)
});

const normalize = (v) => {
    const mag = Math.sqrt(v.x * v.x + v.y * v.y);
    return { x: v.x / mag, y: v.y / mag };
};

// TESTS UNITAIRES
describe("Tests unitaires fournis dans le PDF", () => {

    // permet de bloquer le player dans les limites de lecran 
    test("clamp(1, 10, 2) should return 2", () => {
        const results = clamp(1, 10, 2);
        expect(results).toBe(2);
    });

    // permet un mouvement fluide entre deux positions
    test("clamp(1, 10, -12) should return 1", () => {
        const results = clamp(1, 10, -12);
        expect(results).toBe(1);
    });

    // permet de calculer la projection du vecteur (collision)
    test("lerp(1, 10, 2) should return 19", () => {
        const results = lerp(1, 10, 2);
        expect(results).toBe(19);
    });

    // permet de calculer la distance entre deux points
    test("lerp(1, 10, -12) should return -107", () => {
        const results = lerp(1, 10, -12);
        expect(results).toBe(-107);
    });

    // convertit des coordonnées angle, rayon en coordonnée X/Y
    test("dot product of {x: 5, y: 50} and {x: 10, y: 100}", () => {
        const v1 = { x: 5, y: 50 };
        const v2 = { x: 10, y: 100 };
        const results = dot(v1, v2);
        expect(results).toBe(5050);
    });

    test("add of {x: 5, y: 50} and {x: 10, y: 100}", () => {
        const v1 = { x: 5, y: 50 };
        const v2 = { x: 10, y: 100 };
        const results = add(v1, v2);
        expect(results).toEqual({ x: 15, y: 150 });
    });

    test("subtract of {x: 5, y: 50} and {x: 10, y: 100}", () => {
        const v1 = { x: 5, y: 50 };
        const v2 = { x: 10, y: 100 };
        const results = subtract(v1, v2);
        expect(results).toEqual({ x: -5, y: -50 });
    });

    test("distance between of {angle: 5, radius: 50} and {angle: 10, radius: 100}", () => {
        const p1 = { angle: 5, radius: 50 };
        const p2 = { angle: 10, radius: 100 };
        // un peu différent car grand chiffre apres la virgule
        expect(distance(p1, p2)).toBeCloseTo(98.302, 3);
    });

    // reduit la longueur d'un vecteur à 1 (collision) en gardant sa direction (ex : vitesse constante)
    test("toVector for {angle: 5, radius: 50}", () => {
        const res = toVector({ angle: 5, radius: 50 });
        expect(res.x).toBeCloseTo(14.183, 3);
        // un peu différent car grand chiffre apres la virgule
        expect(res.y).toBeCloseTo(-47.946, 3);
    });

    test("normalize of {x: 5, y: 50}", () => {
        const res = normalize({ x: 5, y: 50 });
        // un peu différent car grand chiffre apres la virgule
        expect(res.x).toBeCloseTo(0.0995, 4);
        expect(res.y).toBeCloseTo(0.9950, 4);
    });


})

// TESTS UNITAIRES PERSONNELS
describe("Tests unitaires personnels", () => {

    test("P1 - clamp : tester avec des chiffres ronds 0 à 100", () => {
        // si la fonction bloque à 100, renvoie 150
        expect(clamp(0, 100, 150)).toBe(100);
    });

    test("P2 - add : ajouter un vecteur nul 0,0", () => {
        // ajouter 0 ne change pas la position initiale
        expect(add({ x: 10, y: 10 }, { x: 0, y: 0 })).toEqual({ x: 10, y: 10 });
    });

    test("P3 - lerp : trouver l'exact milieu 0.5", () => {
        // ex: entre 0 et 20, le milieu est 10
        expect(lerp(0, 20, 0.5)).toBe(10);
    });

    test("P4 - subtract : soustraire le même vecteur", () => {
        // un objet doit donner une distance de 0
        expect(subtract({ x: 5, y: 5 }, { x: 5, y: 5 })).toEqual({ x: 0, y: 0 });
    });

    test("P5 - dot : multiplier par zéro", () => {
        // tout produit scalaire avec 0 doit donner 0
        expect(dot({ x: 10, y: 10 }, { x: 0, y: 0 })).toBe(0);
    });


})