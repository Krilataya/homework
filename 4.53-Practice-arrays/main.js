const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

function getUserAverageAge(users) {
	let summedAdminAge = 0;
	let adminQuantity = 0;

	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin === true) {
			summedAdminAge += users[i].age;
			adminQuantity++;
		}
	}
	const averageAdminAge = summedAdminAge / adminQuantity;
	return averageAdminAge;
}

console.log(getUserAverageAge(users));

function getAllAdmins(users) {
	const admins = [];

	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin === true) {
			admins.push(users[i]);
		}
	}

	return admins;
}

console.log(getAllAdmins(users));

function first(array, n) {
	const result = [];

	if (n === 0) {
		return result;
	}

	if (n === undefined) {
		n = 1;
	}

	array.forEach((number, index) => {
		if (index < n) {
			result.push(number);
		}
	});

	return result;
}

console.log(first([10, 20, 30, 40], 2));
console.log(first([10, 20, 30, 40], 0));
console.log(first([10, 20, 30, 40]));
