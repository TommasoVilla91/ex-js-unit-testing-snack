function getInitials(string){
    const dividedName = string.split(" ");
    const firstLetters = dividedName.map(n => [...n][0] += ".");
    return firstLetters.join("");
};

function createSlug(string, array){
    if(string === "" || null) {
        throw new Error("Titolo assente o non valido!");
    };

    let slug = string.toLowerCase().replaceAll(" ", "-");
    if(array){
        for(let i = 0; i < array.length; i++){
            if(array[i].slug === slug){
                return slug + "-1";
            };
        };
    };
    return slug;
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

function addPost(array, newPost){
    array.forEach(p => {
        if(newPost.id === p.id){
            throw new Error("Id già esistente")
        } else if(newPost.slug === p.slug){
            throw new Error("Slug già esistente")
        };
    });
    array.push(newPost);
};

function removePost(array, id){
    const indexPost = array.findIndex(p => p.id === id);
    return array.splice(indexPost, 1);
};

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPost,
    removePost,
}