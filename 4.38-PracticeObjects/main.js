const person = {
	name: "Надежда",
	lastName: "Яншина",
	age: 41,
	isArokenStudent: true,
	location: "Россия, Крым",
};
console.log(person);

function isEmpty(person) {
	for (const key in person) {
		return false;
	}
	return true;
}

console.log(isEmpty(person));

const task = {
	title: "Выполнить утреннюю тренировку",
	description: "Тренировка под включенный телек",
	isCompleted: false,
};

const modifications = {
	title: "Пройти 10 тысяч шагов",
	isCompleted: true,
	timeToDo: "60 минут",
};

function cloneAndModify(object, modifications) {
	const changes = {
		...object,
		...modifications,
	};

	delete changes.description;

	for (const key in changes) {
		console.log(key + ": " + changes[key]);
	}

	return changes;
}

const newTask = cloneAndModify(task, modifications);

console.log("Исходный объект:", task);
console.log("Модифицированный объект:", newTask);

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},

	method2() {
		console.log("Метод 2 вызван");
	},

	property: "Это не метод",
};

const callAllMethods = (object) => {
	for (const key in object) {
		if (typeof object[key] === "function") {
			object[key]();
		}
	}
};

callAllMethods(myObject);
