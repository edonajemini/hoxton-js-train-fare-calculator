let age = prompt('How old are you?')
let road = prompt('How far are you traveling')
let price = 0.21;
if (age < 18 ){
   priceforunder18 = (0.8 * price) * road;
    console.log(`The price for you is `+ priceforunder18)
  } else if (age >65) {
    priceforover65 = (0.6 * price) * road;
    console.log(`The price for you is `+ priceforover65)
  } else {
    priceforothers = price * road
    console.log(`The price for you is `+ priceforothers)
  }