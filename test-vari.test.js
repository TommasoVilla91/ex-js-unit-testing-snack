const {  } = require("./test-vari.js");

function getInitials(string){
    const dividedName = string.split(" ");
    const firstLetters = dividedName.map(n => [...n][0] += ".");
    return firstLetters.join("");
};

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    const initials = getInitials("Livio Lenta");
    expect(initials).toBe("L.L.");
});