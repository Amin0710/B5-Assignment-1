function formatString(str: string, toUpper?: boolean): string {
	if (typeof toUpper !== "boolean" && toUpper !== undefined) {
		throw new TypeError("Second argument must be a boolean");
	}

	const formattedString: string =
		toUpper === false ? str.trim().toLowerCase() : str.trim().toUpperCase();
	return formattedString;
}

function filterByRating(
	movies: { title: string; rating: number }[]
): { title: string; rating: number }[] {
	const minRating = 4;
	return movies.filter((movie) => movie.rating >= minRating);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
	const concatenatedArray: T[] = [];
	for (const array of arrays) {
		concatenatedArray.push(...array);
	}
	return concatenatedArray;
}

class Vehicle {
	constructor(private make: string, private year: number) {}
	getInfo(): string {
		return `Make: ${this.make}, Year: ${this.year}`;
	}
}
class Car extends Vehicle {
	constructor(make: string, year: number, private model: string) {
		super(make, year);
	}
	getModel(): string {
		return `Model: ${this.model}`;
	}
}

function processValue(value: string | number): number {
	let returnValue: number;
	if (typeof value === "string") {
		returnValue = value.length;
	} else if (typeof value === "number") {
		returnValue = value * 2;
	} else {
		throw new TypeError("Value must be a string or number");
	}
	return returnValue;
}

interface Product {
	name: string;
	price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
	if (products.length === 0) {
		return null;
	}
	return products.reduce((prev, current) =>
		prev.price > current.price ? prev : current
	);
}

enum Day {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

function getDayType(day: Day): string {
	switch (day) {
		case Day.Monday:
		case Day.Tuesday:
		case Day.Wednesday:
		case Day.Thursday:
		case Day.Friday:
			return "Weekday";
		case Day.Saturday:
		case Day.Sunday:
			return "Weekend";
	}
}

async function squareAsync(n: number): Promise<number> {
	if (n < 0) throw new Error("Negative number not allowed");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(n * n);
		}, 1000);
	});
}
