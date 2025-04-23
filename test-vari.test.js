const { getInitials, createSlug, average, isPalindrome } = require("./test-vari.js");

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
})