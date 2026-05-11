# Understanding Generics in TypeScript

## Question

How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Answer

Generics in TypeScript allow developers to create reusable functions, components, and classes that can work with different data types while still keeping strict type safety.

Instead of writing separate functions for strings, numbers, or other data types, Generics let us write one flexible function that works for all types.

Example:

```ts
function getValue<T>(value: T): T {
  return value;
}
```

### Explanation

* `<T>` is called a Generic Type.
* `T` works like a placeholder for any data type.
* The function accepts a value of type `T`.
* It also returns the same type `T`.

Example usage:

```ts
getValue<string>("Hello");
getValue<number>(100);
```

Here:

* In the first example, `T` becomes `string`
* In the second example, `T` becomes `number`

TypeScript automatically remembers the type and keeps everything strictly typed.

Example:

```ts
const result = getValue<string>("TypeScript");

result.toUpperCase(); // Correct
result.toFixed(2); // Error
```

`toFixed()` gives an error because the value is a string, not a number.

This is how Generics provide:

* Reusability
* Flexibility
* Strict Type Safety

## Conclusion

Generics help developers write reusable code that can work with different data types without losing type safety. They make TypeScript code cleaner, safer, and easier to maintain.
