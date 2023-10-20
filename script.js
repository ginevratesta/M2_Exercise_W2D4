// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer 
(il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%,
PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, 
aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop)
la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

                                              //INIZIO ESERCIZIO PER IL WEEKEND

/*Inseriamo tutti gli oggetti dentro l'array vuoto 'clients' usando il metodo .push*/

let clients = [];
clients.push(marco, paul, amy);

/*Creiamo una nuova proprietà 'totalCost', che aggiungeremo ad ogni singolo oggetto tramite l'indice dell'array che li contiene,
e le diamo il valore dei prezzi (a nostra scelta) dall'array 'prices' per avere il totale che ogni utente spenderà in base agli elementi
che aggiunge al suo carrello */

clients[0].totalCost = prices[0];

clients[1].totalCost = prices[0] + prices[1];

clients[2].totalCost = prices[1] + prices[2];





















for (let i = 0; i < clients.length; i++) {
  //la i sta per indice, ovvero gli elementi dell'array
  let person = clients[i]; //dichiariamo una variabile e le attribuiamo l'oggetto corrente
  if (person.isAmbassador === false) {
    //in questo modo chiamiamo isAmbassador di ogni oggetto e lo verifichiamo
    console.log(person.name + " " + person.lastName + " Non è un ambassador"); //chiamiamo nome e cognome di ogni oggetto verificato
  }
  else{
    console.log(person.name + " " + person.lastName + " E' un ambassador");
  }
  console.log(); // non è necessario ma lascia una riga tra una stampa e l'altra
}

let ambassadorClients = []

ambassadorClients.push(clients[0])

console.log(ambassadorClients, " Solo Marco Rossi è cliente Ambassador")