// Traccia 07 · La cassa del supermercato
// La consegna è nel README, alla voce "07 · La cassa del supermercato".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione
let quantitàProdoti = 0;
let totale = 0;
// # Fase di raccolta dati
let prezzo = parseInt(prompt("inserisci il prezzo"));

// # Fase di elaborazione
while (prezzo !== 0) {
  if (isNaN(prezzo) || prezzo < 0) {
    console.log("Prezzo non valido");
  } else {
    quantitàProdoti++;
    totale += prezzo;
  }

  prezzo = parseInt(prompt("Inserisci il prezzo (0 per terminare):"));
}

// # Fase di output

alert(`Prodotti: ${quantitàProdoti} · Totale: ${totale} €`);