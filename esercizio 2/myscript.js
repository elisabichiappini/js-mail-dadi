// Programma2:

// ## Gioco dei dadi
// - dichiarare giocatoreComputer e assegnarli valoreDado ( 1, 2, 3, 4, 5, 6);
// - dichiarare giocatoreUtente e assegnarli valorDado ( 1, 2 ,3, 4, 5, 6);
// - creare un bottone e assegnarli funzione random di gioco dei numeri di gioco a giocatoreComputer e giocatoreUtente;
// - (condizione) chi vince?
// -- SE GiocatoreComputer valoreGioco === GiocatoreUtente valoreGioco allora stampo nessuno ha vinto, 
// --ALTRIMENTI SE GiocatoreComputer valoreGioco > GiocatoreUtente valoreGioco allora stampo ha vinto GiocatoreComputer,
// -- ALTRIMENTI GiocatoreUtente valoreGioco < GiocatoreUtente valoreGioco allora stampo ha vinto GiocatoreUtente;

const btnRandom = document.querySelector('button');

btnRandom.addEventListener('click',
function () {
    const randomComputer = Math.floor(Math.random() * 6) + 1;
    console.log('Random Computer:', randomComputer);
    
    const randomUser = Math.floor(Math.random() * 6) + 1;
    console.log('Random Userr:', randomUser);

    if (randomComputer > randomUser) {
        console.log('ha vinto il Computer!');
    } else if (randomComputer < randomUser) {
        console.log('Hai vinto!');
    } else {
        console.log('Avete giocato lo stesso numero!');
    }
});
