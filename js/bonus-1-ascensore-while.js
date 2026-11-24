// bonus1 · L'ascensore while
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
let pianoAlmomento = 0;
// # Fase di elaborazione

if (isNaN(piano) || piano < 0) {
  alert("Piano non valido")

} else {
  while (pianoAlmomento <= piano) {
    console.log(`Piano ${pianoAlmomento}`);
    pianoAlmomento++;
  }
  alert(`Sei arrivato al piano ${piano}`);
}

// # Fase di output

