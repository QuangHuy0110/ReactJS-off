// bai 1
const arr = [0, 5, 4, 2, 8];
var sum = 0;
for (let x in arr) {
    sum += arr[x];
}
console.log('Output:',sum);

// bai 2
const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28}
];
const personMap = person.map(function getName(person){
	return person.name;
});
console.log('Output:',personMap);

//bai 3
arr1 = ['John', 'Pete', 'Mary'];
arr2 = ['Mary', 'Henry', 'Harry'];

for (let i = 0; i < arr2.length; i++) {
	if(arr1.includes(arr2[i])===false){
		arr1.push(arr2[i]);
	}	
}
console.log("Output",arr1);
