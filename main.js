// CLASS 13:
var bill = {
    customerName: "Faiez",
    timestamp: "12:05"
};
console.log(bill.customerName, bill.timestamp);
// Example:
var juice;
// Loop:
// Less Than & Equal to:
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
// For loop value at 5, 10, 20, 25:
for (var i = 5; i <= 25; i = i + 5) {
    console.log(i);
}
// Greater Than & Equal to:
for (var a = 5; a >= 1; a--) {
    console.log(a);
}
// Whild Loop:
var abc = 1;
while (abc <= 15) {
    console.log(abc);
    abc += 3;
}
// Array + Loop:
var fruit = ["Apple", "Banana", "Peach", "Orange"];
// console.log(fruit.length);
for (var i = 0; i < 4; i++) {
    console.log(fruit[i]);
}
// Loop + Length
for (var i = 1; i < fruit.length; i++) {
    console.log(fruit[i]);
}
// Enums:
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
// Example
var TimingSlots;
(function (TimingSlots) {
    TimingSlots["Morning"] = "9-12";
    TimingSlots["Evening"] = "2-5";
    TimingSlots["Night"] = "7-10";
})(TimingSlots || (TimingSlots = {}));
console.log(TimingSlots.Evening);
var employData = [
    [45, "Faiez", 70000]
];
console.log(employData[0]);
var employDatas = [
    [45, "Faiez", 70000],
    [55, "Ali", 80000],
    [65, "Ayan", 90000]
];
for (var _i = 0, employDatas_1 = employDatas; _i < employDatas_1.length; _i++) {
    var data = employDatas_1[_i];
    console.log(data[0], data[1], data[2]);
}
