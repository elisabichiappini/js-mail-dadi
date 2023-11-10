// Programma1:

// ## Mail
// - Prompt per input utente: "inserisci email";
// - (condizione) la mail è presente nella lista per accesso?
// -- SE VERO è nella lista di chi può accedere, allora stampo esito positivo;
// -- ALTRIMENTI stampo accesso non consentito.

const listaEmailUtenti = ['saradavanzo@gmail.com', 'robertochiappini@gmail.com', 'marirosso@gmail.com', 'eli@g.com', 'elisachiappini@gmail.com', 'stefanobasso@gmail.com', 'giuliavogliotti@gmail.com'];

const emailUtente = prompt ('Inserisci la tua mail?');


 for (let listControlEmail = 0; listControlEmail < listaEmailUtenti.length; listControlEmail++) {
    if (listaEmailUtenti[listControlEmail] === emailUtente) {
        console.log(listControlEmail, 'mail valida per accesso');
        break;
    } else {
       console.log(listControlEmail, 'mail non associata');
  }
};