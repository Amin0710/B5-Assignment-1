## 1. The Power of `keyof` in TypeScript

When there is a union type in the parameter, `keyof` helps the developer figure out the exact **type**, useful while restricting inputs.

```ts
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
```

## 2. Union vs. Intersection Types

Union (|) and intersection (&) types are TypeScript’s way of handling multiple types,

- `|` (union) as **either this or that**

```ts
function format(value: string | number);
// here value can be both string or number but noth as the same time.
```

- `&` (intersection) as **must be both**

```ts
type A = { id: number };
type B = { name: string };

type AB = A & B;

const obj: AB = { id: 1, name: "Hybrid" };
// here AB has to have both key of A and B.
```
