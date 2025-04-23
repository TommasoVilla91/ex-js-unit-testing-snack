function getInitials(string){
    const dividedName = string.split(" ");
    const firstLetters = dividedName.map(n => [...n][0] += ".");
    return firstLetters.join("");
};

function createSlug(string){
    if(string === "" || null) {
        throw new Error("Titolo assente o non valido!");
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
    array.forEach(p => {
        if(p.id === undefined || p.title === undefined || p.slug === undefined){
            throw new Error("L'array non è corretto")
        };
    });
    if(id > array.length){
        return null;
    } else if(typeof id !== "number"){
        throw new Error(`${id} is not valid`);
    } else {
        return array.find(u => u.id === id);
    }
};

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
}