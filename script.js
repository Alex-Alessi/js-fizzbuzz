console.log("JS Collegato");

//! TiTOLO
//* FizzBuzz

//! TRACCiA
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//! RACCOLTA DATi

//! ELABORAZiONE

//* creiamo un ciclo che vada da 1 a 100
for (let i = 1; i <= 100; i++) {
  //* creiamo una variabile message che verrà sovrascritta nel caso in cui le condizioni vengano rispettate
  let message = "";
  //* controlliamo SE l'indice attuale è un multiplo di 3
  if (i % 3 === 0) {
    //* se lo è cambiamo il valore del messaggio con "Fizz" e controlliamo SE è anche multiplo di 5
    message = "Fizz";
    if (i % 5 === 0) {
      //* SE è anche multiplo di 5, cambiamo il valore del messaggio con "FizzBuzz"
      message = "FizzBuzz";
    }
  }

  //* ALTRIMENTI controlliamo SE è solo un multiplo di 5
  else if (i % 5 === 0) {
    //* se lo è cambiamo il valore del messaggio con "Buzz"
    message = "Buzz";
  }

  //* ALTRIMENTI restituiamo il numero
  else {
    message = i;
  }

  //! OUTPUT
  //*stampiamo il contenuto del messaggio
  console.log(message);
}
