# Understanding Pick and Omit Utility Types in TypeScript

## Question

How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Answer

In TypeScript, `Pick` and `Omit` are utility types that help developers create smaller and specialized versions of a large interface without rewriting code.

This helps keep the code DRY (Don't Repeat Yourself).

Suppose we have a master interface:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

Instead of creating new interfaces manually, we can use `Pick` and `Omit`.

---

## Using Pick

`Pick` is used to select specific properties from an interface.

Example:

```ts
type UserProfile = Pick<User, "id" | "name">;
```

### Explanation

Here, `UserProfile` will only contain:

```ts
{
  id: number;
  name: string;
}
```

Only the needed properties are taken from the main interface.

---

## Using Omit

`Omit` is used to remove specific properties from an interface.

Example:

```ts
type SafeUser = Omit<User, "password">;
```

### Explanation

Here, `SafeUser` will contain:

```ts
{
  id: number;
  name: string;
  email: string;
}
```

The `password` field is removed.

---

## How This Prevents Code Duplication

Without `Pick` and `Omit`, developers would need to create multiple similar interfaces manually.

Example:

```ts
interface UserProfile {
  id: number;
  name: string;
}

interface SafeUser {
  id: number;
  name: string;
  email: string;
}
```

This repeats code and becomes difficult to maintain.

With `Pick` and `Omit`, we reuse the main interface instead of rewriting properties.

---

## How It Keeps Code DRY

DRY means "Don't Repeat Yourself".

`Pick` and `Omit` help keep code DRY because:

* Properties are written only once
* Changes in the main interface automatically update related types
* Code becomes cleaner and easier to maintain
* Less chance of mistakes or inconsistent types

For example, if we add a new property to `User`, TypeScript can automatically keep related types updated.

---

## Conclusion

`Pick` and `Omit` utility types allow developers to create specialized slices of a master interface without rewriting code. This reduces duplication, improves maintainability, and keeps TypeScript code DRY, clean, and type-safe.
