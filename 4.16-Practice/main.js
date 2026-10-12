const number = 8;

if (number % 2 === 0) {
	console.log("Чёт");
} else {
	console.log("Нечёт");
}

const age = 41;

const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;

console.log(`Скидка ${discount}%`);

// let discount;

// switch (true) {
// 	case age < 18:
// 		discount = 10;
// 		break;

// 	case age <= 65:
// 		discount = 20;
// 		break;

// 	default:
// 		discount = 30;
// }

// console.log(`Скидка ${discount}%`);

// const username = prompt("Введите имя пользователя");
// const password = prompt("Введите пароль");

// if ((username === "admin" || username === "user") && password === "123456") {
// 	console.log("Доступ разрешен");
// } else {
// 	console.log("Доступ запрещен");
// }
