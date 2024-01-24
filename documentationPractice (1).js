// All these practice are in the following link: https://devdocs.io/javascript/global_objects/array

const fruits = [];
fruits.push("banana", "apple", "peach");
//console.log(fruits.length); // 3
//fruits[5] = "mango";
//console.log(fruits[5]); // 'mango'
//console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
fruits.length = 10;
console.log(fruits);

// Methods in Arrays that  have speacial treatment for empty slots
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
console.log(`${index}: ${item}`);
});
// 0: red
// 1: yellow
// 2: blue
// 5: purple
console.log(colors.reverse()); // ['purple', empty × 2, 'blue', 'yellow', 'red']

// Methods in Arrays that no have speacial treatment for empty slots
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']

