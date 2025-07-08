const region = 'Tokyo'; // NON MODIFICARE QUESTA RIGA
const regionName = 'Region'; // NON MODIFICARE QUESTA RIGA
const fruitBasket = 'mele, pere, ananas, arance'; // NON MODIFICARE QUESTA RIGA
const welcome = 'welcome'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere 'o' nella variabile region
const regionIndex = 'o';
console.log(region.indexOf(regionIndex)); // Output: 1

// 2. Sottostringhe 
// Stampa la sottostringa "yo" dalla variabile region
const regionSubstring = region.substring(3);
console.log(regionSubstring); // Output: "yo"

// 3. Sostituzione
// Sostituisci 'Tokyo' con 'Osaka'
const regionReplaced = region.replace('Tokyo', 'Osaka');
console.log(regionReplaced); // Output: "Osaka"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi regionNameConcat uguale a 'Tokyo Region'
const regionNameConcat = `${region} ${regionName}`;
console.log(regionNameConcat); // Output: "Tokyo Region"

// 5. Tutto in maiscolo
// Trasforma tutto in maiuscolo la stringa della variabile welcome
const upperCaseWelcome = welcome.toUpperCase();
console.log(upperCaseWelcome); // Output: "WELCOME"
