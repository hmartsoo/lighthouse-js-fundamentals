const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

//for loops are a good option for iterating over items in an array
console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
	console.log(packingList[i]);
}

//while loops can also produce the same result - it separates the logic into a few more lines though
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
	console.log(packingList[i]);
	i++;
}