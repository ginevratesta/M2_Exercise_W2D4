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

/*Creiamo una nuova proprietà 'totalShoopingCart', che aggiungeremo ad ogni singolo oggetto tramite l'indice dell'array che li contiene,
e le diamo il valore dei prezzi (a nostra scelta) dall'array 'prices' per avere il totale che ogni utente spenderà in base agli elementi
che aggiunge al suo carrello */

clients[0].totalShoppingCart = prices[0];

clients[1].totalShoppingCart = prices[0] + prices[1];

clients[2].totalShoppingCart = prices[1] + prices[2];

console.log(); //nessuna utilità, inserito solo per avere più ordine dentro il terminale

let freeShipping = 100; /*dichiariamo una variabile con valore 100, ovvero la cifra da dover superare per ottenere la spedizione gratuita,
e la utilizziamo dentro il ciclo per ottenere la cifra restante, tramite sottrazione, per poterla raggiungere*/

for (let i = 0; i < clients.length; i++) {
  //per semplificare potremmo anche scrivere "for(let person of clients){}".

  let person = clients[i]; //dichiariamo la variabile person per comodità per raggiungere facilmente le proprietà dentro gli oggetti dentro l'array

  //se è ambassador e spende +100
  //se è ambassador e non spende +100
  //se non è ambassador e spende +100
  //se non è ambassador e non spende +100

  if (person.isAmbassador && person.totalShoppingCart > freeShipping) {
    console.log(`${person.name} ${person.lastName}: 
    è un cliente Ambassador e ha diritto allo sconto, avendo inoltre superato il prezzo minimo di ${freeShipping} 
    euro non dovrà pagare i costi di spedizione di ${shippingCost} euro.
    Il totale provvisorio è di ${
      person.totalShoppingCart
    } euro, ed applicando lo sconto del 30% è di 
    ${person.totalShoppingCart * 0.7}\n`);
  }

  if (person.isAmbassador && person.totalShoppingCart <= freeShipping) {
    console.log(`${person.name} ${person.lastName}: 
  è un cliente Ambassador e ha diritto allo sconto, ma il totale nel carrello non supera il prezzo minimo di ${freeShipping} 
  euro per poter usufruire della spedizione gratuita. Il totale provvisorio è di ${
    person.totalShoppingCart
  } euro, 
  applicando lo sconto è di ${
    person.totalShoppingCart * 0.7
  } e aggiungendo i costi di spedizione che ammontano a 
  ${shippingCost} euro, il totale è di ${
      person.totalShoppingCart * 0.7 + shippingCost
    } euro.\n`);
  }

  if (!person.isAmbassador && person.totalShoppingCart > freeShipping) {
    console.log(`${person.name} ${person.lastName}: 
  non è un cliente Ambassador, ma il totale nel carrello supera il prezzo minimo di ${freeShipping} 
  euro e non dovrà pagare i costi di spedizione di ${shippingCost} euro. Il totale da pagare è di ${person.totalShoppingCart} euro\n`);
  }

  if (!person.isAmbassador && person.totalShoppingCart <= freeShipping) {
    console.log(`${person.name} ${person.lastName}: 
  non è un cliente Ambassador e il totale nel carrello non supera il prezzo minimo di ${freeShipping} 
  euro per poter usufruire della spedizione gratuita. Il totale provvisorio è di ${person.totalShoppingCart} euro 
  e aggiunngendo i costi di spedizione che ammontano a ${shippingCost} euro, il totale è di ${
      person.totalShoppingCart + shippingCost
    } euro.\n`);
  }
}

let ambassadorClients = [];

//pushamo l'oggetto che ha la proprietà 'isAmbassador = true' dentro l'array vuoto appena creato
for (let i = 0; i < clients.length; i++) {
  let person = clients[i];
  if (clients[i].isAmbassador) {
    ambassadorClients.push(clients[i]);
  }
}
console.log(ambassadorClients);
