// 1. Dichiarazione di variabili
// Crea una variabile chiamata nickname e assegnale un soprannome.
// Stampa il valore di nickname nella console.

const nickname = 'Polpetta';
console.log(nickname);

// 2. Tipi primitivi
// Crea tre variabili chiamate luckyNumber, phrase e isCodingFun
// e assegna rispettivamente un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.

const luckyNumber = 37;
const phrase = 'Non sei fortunato!';
const isCodingFun = 1;

console.log(luckyNumber);
console.log(phrase);
console.log(isCodingFun);

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il soprannome completo
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const userName = 'Alex'; // NON MODIFICARE QUESTA RIGA
const userNickname = 'Thunder'; // NON MODIFICARE QUESTA RIGA

const completeName = userName + ' ' + userNickname;
console.log(completeName); // Output: "Alex Thunder"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile characters per ottenere la sua lunghezza
const alphabetSize = characters.length;
console.log(alphabetSize); // Output: 26