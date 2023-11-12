// restizioni codice js
'use strict';

// Programma1:

// ## Mail
// - Prompt per input utente: "inserisci email";
// - (condizione) la mail è presente nella lista per accesso?
// -- SE VERO è nella lista di chi può accedere, allora stampo esito positivo;
// -- ALTRIMENTI stampo accesso non consentito.

// lista mail che hanno accesso
const listaEmailUtenti = ['saradavanzo@gmail.com', 'robertochiappini@gmail.com', 'marirosso@gmail.com', 'eli@g.com', 'elisachiappini@gmail.com', 'stefanobasso@gmail.com', 'giuliavogliotti@gmail.com'];

//stato iniziale
let canAccess = false;

//esecuzione della veririca di accesso
const emailUtente = prompt ('Inserisci la tua mail?');

 for (let listControlEmail = 0; listControlEmail < listaEmailUtenti.length; listControlEmail++) {
    if (listaEmailUtenti[listControlEmail] === emailUtente) {
      canAccess = true;
      //interrompi ricerca se hai trovato corrispondenza
      break;
    }
};

//stato finale
if (canAccess === false) {
  console.log('Non puoi accedere');
} else {
  console.log('Puoi accedere');
}