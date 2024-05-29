// CLASS 13:

// Interface
interface slip {
	customerName:string
	timestamp:string
}

let bill:slip = {
	customerName:"Faiez",
	timestamp:"12:05"
}
console.log(bill.customerName,bill.timestamp);

// Example:
let juice: "small" | "large" 

// Loop:
// Less Than & Equal to:
for(let i = 1; i <= 5; i++){
	console.log(i);
}

// For loop value at 5, 10, 20, 25:
for(let i = 5; i <= 25; i = i + 5){
	console.log(i);
}

// Greater Than & Equal to:
for(let a = 5; a >= 1; a--){
	console.log(a);
}


// Whild Loop:
let abc = 1
while(abc <= 15 ){
	console.log(abc);
	abc+=3
}

// Array + Loop:
let fruit = ["Apple", "Banana", "Peach", "Orange"]
// console.log(fruit.length);

for(let i = 0; i < 4; i++){
	console.log(fruit[i]);
}

// Loop + Length
for(let i = 1; i < fruit.length; i++){
	console.log(fruit[i]);
}


// Enums:
enum Direction{
	North = "North",
	South = "South",
	East = "East",
	West = "West"
}
console.log(Direction.North);

// Example
enum TimingSlots {
	Morning = "9-12",
	Evening = "2-5",
	Night = "7-10"
}
console.log(TimingSlots.Evening);


// Toples:
type DataBase = [number, string, number]
const employData: DataBase[]=[
	[45, "Faiez", 70000]
]
console.log(employData[0]);

// Example:
type DataBases = [number, string, number]
const employDatas: DataBase[]=[
	[45, "Faiez", 70000],
	[55, "Ali", 80000],
	[65, "Ayan", 90000]
]
for(let data of employDatas){
	console.log(data[0], data[1], data[2]);
}


