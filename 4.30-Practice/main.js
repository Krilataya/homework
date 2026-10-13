function calculateFinalPrice(basePrice, percentDiscount, tax) {
	const discountAmount = (basePrice * percentDiscount) / 100;
	const discountedPrice = basePrice - discountAmount;
	const taxedAmount = discountedPrice * tax;
	const finalPrice = discountedPrice + taxedAmount;

	return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

const checkAccess = (userName, password) => {
	if (userName === "admin" && password === 123456) {
		console.log("Доступ разрешен");
	} else {
		console.log("Доступ запрещен");
	}
};

checkAccess("admin", 123456);
checkAccess("anotherUser");

function getTimeOfDay(hour) {
	switch (true) {
		case hour >= 0 && hour <= 5:
			return "Ночь";

		case hour >= 6 && hour <= 11:
			return "Утро";

		case hour >= 12 && hour <= 17:
			return "День";

		case hour >= 18 && hour <= 23:
			return "Вечер";

		default:
			return "Некорректное время";
	}
}

console.log(getTimeOfDay(4));
console.log(getTimeOfDay(10));
console.log(getTimeOfDay(14));
console.log(getTimeOfDay(21));
console.log(getTimeOfDay(27));

const findFirstEven = (startNumber, endNumber) => {
	for (let i = startNumber; i <= endNumber; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Четных чисел нет";
};

console.log(findFirstEven(3, 9));
console.log(findFirstEven(9, 27));
console.log(findFirstEven(7, 15));
