// Traccia 04 · Il coro dello stadio
// La consegna è nel README, alla voce "04 · Il coro dello stadio".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione
let coroCompleto = "";

// # Fase di raccolta dati
let parolaCoro = prompt("Preferisci che il coro dica (forza) o (olè)?");
let ripetizioneCoro = parseInt(prompt("inserisci il numero di volte che si vuole che il coro si ripeta"));

// # Fase di elaborazione


for (let i = 1; i <= ripetizioneCoro; i++) {
  console.log(`${i} · ${parolaCoro}`);
  coroCompleto += parolaCoro + " ";
}


// # Fase di output

alert(coroCompleto);