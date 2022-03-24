//Chiedi all'utente il suo nome

const firstName = prompt('Qual è il tuo nome?');
console.log(firstName);

//Chiedi all'utente il suo cognome

const lastName = prompt('Qual è il tuo Cognome');
console.log(lastName);

//Chiedi all'utente il suo colore preferito

const favColor = prompt('Qual è il tuo colore preferito?');
console.log(favColor);

//Risultato delle info utente 
//aggiunta di un numero a fianco di info-utente

document.getElementById('info-utente').innerHTML = `${selName+lastName+favColor}22`

