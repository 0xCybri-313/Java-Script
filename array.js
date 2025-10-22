// let heroes = ["Iron Man", "Captain America", "Hulk", "Thor", "Black Panther"];

// for (let hero of heroes) {
//   console.log(hero);
// }

// let marks = [87, 78, 99, 89, 95, 90];

// let totalSum = 0;

// for (let mark of marks) {
//   totalSum = mark + totalSum;
// }
// let avg = totalSum / marks.length;
// console.log(avg);

// let total = 0;
// for (let item of shoppedItems) {
//   total = item + total;
// }
// let finalPrice = total - (total / 100) * 10;
// console.log(finalPrice);

let shoppedItems = [250, 645, 300, 900, 50];

for (let i = 0; i < shoppedItems.length; i++) {
  shoppedItems[i] = shoppedItems[i] - (shoppedItems[i] / 100) * 10;
  console.log(shoppedItems[i]);
}
