// fichier servant a :

// fonctions mathématiques du jeu 
const clamp = (min, max, val) => Math.max(min, Math.min(max, val));

const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

const dot = (v1, v2) => v1.x * v2.x + v1.y * v2.y;

const add = (v1, v2) => ({ x: v1.x + v2.x, y: v1.y + v2.y })

const subtract = (v1, v2) => ({ x: v1.x - v2.x, y: v1.y - v2.y });

const distance = (p1, p2) => {
    const v1 = toVector(p1);
    const v2 = toVector(p2);
    return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
}

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


    test("clamp(1, 10, 2) should return 2", () => {
        const results = clamp(1, 10, 2);
        expect(results).toBe(2);
    });

    test("clamp(1, 10, -12) should return 1", () => {
        const results = clamp(1, 10, -12);
        expect(results).toBe(1);
    });

    test("lerp(1, 10, 2) should return 19", () => {
        const results = lerp(1, 10, 2);
        expect(results).toBe(19);
    });

    test("lerp(1, 10, -12) should return -107", () => {
        const results = lerp(1, 10, -12);
        expect(results).toBe(-107);
    });

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