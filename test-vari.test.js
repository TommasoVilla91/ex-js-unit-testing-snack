const { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost } = require("./test-vari.js");

describe("Operazioni con stringhe", () => {

    // Snack 1
    test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
        const initials = getInitials("Livio Lenta");
        expect(initials).toBe("L.L.");
    });

    // Snack 5
    test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
        expect(isPalindrome("Anna")).toBeTruthy();
        expect(isPalindrome("Pollo")).toBeFalsy();
    });
});


let posts;

beforeEach(() => {
    posts = [
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
});

afterEach(() => {
    posts = [];
});


describe("Operazioni con slug", () => {
    
    // Snack 2
    test("La funzione createSlug restituisce una stringa in lowercase", () => {
        expect(createSlug("Polenta")).toBe("polenta");
    });

    // Snack 4
    test("La funzione createSlug sostituisce gli spazi con -", () => {
        expect(createSlug("Polenta taragna")).toBe("polenta-taragna");
    });

    // Snack 6
    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
        const invalidString = () => createSlug("");
        const nullInput = () => createSlug(null);
        expect(invalidString).toThrow();
        expect(nullInput).toThrow();
    });

    // Completato vedendo correzione
    // Snack 10
    test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già", () => {
        expect(createSlug("Il mio primo post sul blog", posts)).toBe("il-mio-primo-post-sul-blog-1");
        addPost(posts, {
            id: 5,
            title: "Esplorando le meraviglie dell'Italia",
            slug: createSlug("Esplorando le meraviglie dell Italia", posts)
        });
        expect(posts[posts.length - 1].slug).toBe("esplorando-le-meraviglie-dell-italia-1");
    });
});


describe("Operazioni con array", () => {
    
    // Snack 3
    test("La funzione average calcola la media aritmetica di un array di numeri", () => {
        expect(average([1, 7, 33, 82])).toBe(30.75);
    });   
    
    // Snack 7
    test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
        expect(findPostById(posts, 3))
        .toEqual({
            id: 3,
            title: "Esplorando le meraviglie dell'Italia",
            slug: "esplorando-le-meraviglie-dell-italia"
        });
        expect(findPostById(posts, 9)).toBe(null);
        expect(() => findPostById(posts, "mimmo")).toThrow();
        expect(() => findPostById(["Mauro", 77, "Enzo"], 2)).toThrow();
    });


    // Snack 8
    test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più", () => {
        addPost(posts, {
            id: 5,
            title: "I draghi di Mario Draghi",
            slug: "i-draghi-di-mario-draghi"
        });
        expect(posts).toHaveLength(5);
    });

    test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno", () => {
        removePost(posts, 4);
        expect(posts).toHaveLength(3);
    });


    // Snack 9
    test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore", () => {        
        expect(() => addPost(posts, { id: 3, title: "Gatti Kobra", slug: "gatti-kobra" })).toThrow();
        expect(() => addPost(posts, { id: 5, title: "Il mio primo post sul blog", slug: "il-mio-primo-post-sul-blog" })).toThrow();
    });
});
