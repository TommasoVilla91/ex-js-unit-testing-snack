function getInitials(string){
    const dividedName = string.split(" ");
    const firstLetters = dividedName.map(n => [...n][0] += ".");
    return firstLetters.join("");
};

function createSlug(string){
    if(string === "") {
        throw new Error("Titolo assente o non valido!")
    };

    const divideString = string.split(" ");
    if(divideString.length > 1){
        return divideString.toString().replace(",", "-");
    } else {
        return divideString[0].toLowerCase();
    };
};

function average(array){
    const sum = array.reduce((acc, n) => {
        return acc + n;
    }, 0);
    return sum / array.length;
};

function isPalindrome(string){
    const reverseString = ([...string].reverse()).join("").toLowerCase();
    return reverseString === string.toLowerCase();
};

function findPostById(array, id){
    return array.find(u => u.id === id);
};

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
}