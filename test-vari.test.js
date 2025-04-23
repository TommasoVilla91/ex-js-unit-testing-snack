const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./test-vari.js");

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    const initials = getInitials("Livio Lenta");
    expect(initials).toBe("L.L.");
});


// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("Polenta")).toBe("polenta");
});


// Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(average([1, 7, 33, 82])).toBe(30.75);
});


// Snack 4
test("La funzione createSlug sostituisce gli spazi con -", () => {
    expect(createSlug("Polenta taragna")).toBe("Polenta-taragna");
});


// Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(isPalindrome("Anna")).toBeTruthy();
    expect(isPalindrome("Pollo")).toBeFalsy();
});


// Snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    const invalidString = () => createSlug("");
    const nullInput = () => createSlug(null);
    expect(invalidString).toThrow();
    expect(nullInput).toThrow();
});

const posts = [
    {
      id: 1,
      title: "Il mio primo post sul blog",
      slug: "il-mio-primo-post-sul-blog"
    },
    {
      id: 2,
      title: "Consigli utili per la programmazione JavaScript",
      slug: "consigli-utili-programmazione-javascript"
    },
    {
      id: 3,
      title: "Esplorando le meraviglie dell'Italia",
      slug: "esplorando-le-meraviglie-dell-italia"
    },
    {
      id: 4,
      title: "Ricette facili e veloci per la cena",
      slug: "ricette-facili-e-veloci-per-la-cena"
    }
];

// Snack 7
test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
    expect(findPostById(posts, 3))
    .toEqual({
        id: 3,
        title: "Esplorando le meraviglie dell'Italia",
        slug: "esplorando-le-meraviglie-dell-italia"
    });
    expect(findPostById(posts, 5)).toBe(null);
    expect(() => findPostById(posts, "mimmo").toThrow());
    expect(() => findPostById(["Mauro", 77, "Enzo"], 2).toThrow());
});


// 