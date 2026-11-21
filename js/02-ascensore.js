// Traccia 02 · L'ascensore
// La consegna è nel README, alla voce "02 · L'ascensore".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione


// # Fase di raccolta dati

let piano = parseInt(prompt("Inserisci il piano in qui vuoi andare"));

// # Fase di elaborazione

if (isNaN(piano) || piano < 0) {
  alert("Piano non valido")

} else {
  for (let i = 0; i <= piano; i++) {
    console.log(`Piano ${i}`);
  }
  alert(`Sei arrivato al piano ${piano}`);
}


// # Fase di output

