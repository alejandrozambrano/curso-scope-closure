//function moneyBox(coins) {
//    let saveCoins = 0; 
//    saveCoins += coins;
//    console.log(`MoneyBox: $${saveCoins}`);
//}

// moneyBox(5);
// moneyBox(5);

// function moneyBox() {
//     let saveCoins = 0;
//     function countCoints(coins) {
//         saveCoins += coins;
//         console.log(`MoneyBox: $${saveCoins}`)
//     }
//     return countCoints;
// }

// const myMoneyBox = moneyBox();
// myMoneyBox(5);
// myMoneyBox(5);
// myMoneyBox(15);

// const moneyBoxAna = moneyBox();
// moneyBoxAna(10);
// moneyBoxAna(20);
// moneyBoxAna(5);


// MOSTRAR SOLO EL VALOR ENVIADO

// function alcancia(monedas){
//     let contenido = 0
//     contenido = contenido + monedas
//     return contenido
// }

// const miAlcancia = alcancia
// miAlcancia(5) // 5
// miAlcancia(4) // 4


function alcancia(cantidadInicial){
    let contenido = cantidadInicial
    return function guardar(monedas){
      contenido = contenido + monedas
      return contenido
    }
  }
  
  const miAlcancia = alcancia(2)
  miAlcancia(5) // 7
  miAlcancia(4) // 11
  
  const otraAlcancia = alcancia(5)
  otraAlcancia(30) // 35
  otraAlcancia(20) // 55