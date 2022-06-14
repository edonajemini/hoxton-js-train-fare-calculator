let age = prompt("How old are you? (enter a number)");
while (!/^[0-9]+$/.test(age)) {
    alert("Please enter a number!");
    age = prompt("Enter a number: ");
}
let road = prompt("How far are you going? (enter a number)");
while (!/^[0-9]+$/.test(road)) {
    alert("Please enter a number!");
    road = prompt("Enter a number: ");
}
let price = 0.21;
if (age < 18 ){
  let pricefor = (0.8 * price) * road;
  let priceforunder18 = pricefor.toFixed(2)
    console.log(`The price for you is `+ "£"+ priceforunder18)
  } else if (age >65) {
    priceforover65 = (0.6 * price) * road;
    console.log(`The price for you is `+ "£"+ priceforover65)
  } else {
    priceforothers = price * road
    console.log(`The price for you is `+ "£" + priceforothers )
  }