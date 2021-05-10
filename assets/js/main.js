/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

var zucchine = [
    {
        varieta: "Nera di Milano",
        peso: 1,
        lunghezza: 24
    },

    {
        varieta: "Alberello",
        peso: 3,
        lunghezza: 15
    },

    {
        varieta: "Tonda di Nizza",
        peso: 5,
        lunghezza: 8
    },

    {
        varieta: "Lunghe fiorentine",
        peso: 4,
        lunghezza: 34
    },

    {
        varieta: "Trombetta d'Albenga",
        peso: 6,
        lunghezza: 32
    },

    {
        varieta: "Zucchino giallo Golden",
        peso: 1.5,
        lunghezza: 12
    },

    {
        varieta: "Striata d'Italia",
        peso: 3,
        lunghezza: 22
    },

    {
        varieta: "Zucchina bianca triestina",
        peso: 2,
        lunghezza: 14
    },

    {
        varieta: "Croocknet",
        peso: 3,
        lunghezza: 19
    },

    {
        varieta: "Zucchina genovese",
        peso: 2.3,
        lunghezza: 19
    },

    {
        varieta: "Zucchino siciliano",
        peso: 2,
        lunghezza: 14
    }
]

var pesoTotale = 0;
for (var i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso;
}
console.log("le zucchine tutte insieme pesano: " + pesoTotale);


/* Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

var zucchineLunghe = [];
var pesoZucchineLunghe = 0;
var zucchineCorte = [];
var pesoZucchineCorte = 0;

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza > 15) {
        zucchineLunghe.push(zucchine[i]);
        pesoZucchineLunghe += zucchine[i].peso;
    } else {
        zucchineCorte.push(zucchine[i]);
        pesoZucchineCorte += zucchine[i].peso;
    }
}
console.log("le zucchine lunghe pesano: " + pesoZucchineLunghe);
console.log("le zucchine corte pesano: " + pesoZucchineCorte);

/* Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata(es.Ciao -> oaiC)
*/
function reverseWord(stringa) {
    var reverse = []
    for (var i = 0; i < stringa.length; i++) {
        reverse.unshift(stringa[i])
    }
    reverse = reverse.join("")
    return reverse;
}
console.log(reverseWord("ciao"));

/*Snack 4:
Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3]. */
function mergeArray(array1, array2) {
    var arrayMerged = [];
    if (array1.length == array2.length) {
        for (var i = 0; i < array1.length; i++) {
            arrayMerged.push(array1[i], array2[i]);
            console.log(arrayMerged);
        }
        return arrayMerged;
    } else {
        alert("errore le due array non hanno la stessa lunghezza")
    }
}
console.log(mergeArray("ciao", "1234"));

/* Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

function arrayElementSelector(array1, a, b) {
    var newArray = []
    if (a < b && array1.length > b) {
        for (var i = a; i < b; i++) {
            newArray.push(array1[(i)]);
        }
        return newArray
    } else {
        alert("ATTENZIONE!!! il valore a è maggiore di b o b è maggiore della lunghezza dell'array")
    }
}
console.log(arrayElementSelector("aristogatti", 3, 8));