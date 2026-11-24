// Traccia 08 · La password in 3 tentativi
// La consegna è nel README, alla voce "08 · La password in 3 tentativi".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione


// # Fase di raccolta dati
let password = "";
let tentativiRimasti = 3;
// # Fase di elaborazione
while (password !== "segreta26" && tentativiRimasti > 0) {

  password = prompt("Inserisci la password");

  if (password !== "segreta26") {

    tentativiRimasti--;
    console.log(`Password errata. Tentativi rimasti: ${tentativiRimasti}`);
  }
}

// # Fase di output
if (password === "segreta26") {
  alert("Benvenuto");
} else {
  alert("Bloccato");
}
