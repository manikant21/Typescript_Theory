Q. What advantage does typescript gives us?Explain with example?
Ans-: TypeScript provides type safety, better tooling, and cleaner, more maintainable code compared to plain JavaScript.
Ex-:1. Static Type Checking
function add(a: number, b: number): number {
  return a + b;
}

// add(5, "10"); 
console.log(add(5, 10)); 

 2.Interfaces and Type Aliases
 interface Product {
  id: number;
  name: string;
}

function showProduct(product: Product) {
  console.log(`${product.id}: ${product.name}`);
}

 3.Refactoring Support

Q. What does typescript add to javascript?Explain each of them in your own words.
Ans-: TypeScript adds several key features to JavaScript that improve how you write, read, and manage code
1. Static Typing
What it adds: The ability to define the type (like number, string, boolean, etc.) of a variable or function argument.

In plain words: You tell the code what kind of data to expect, and TypeScript checks it for you before running the code.
2. Type Inference
What it adds: TypeScript can figure out the type of a variable based on how you use it.

In plain words: You don’t always have to say the type—TypeScript is smart enough to guess and help you.
3. Interfaces & Type Aliases
What it adds: You can define the structure of an object or function using interfaces or types.

In plain words: You make rules for what a variable should look like.
4. Generics
What it adds: Functions and classes that work with many types instead of just one.

In plain words: You can write reusable, type-safe code without giving up flexibility.

Q.Why do we need typescript compiler?
Ans-:We need the TypeScript compiler (tsc) because browsers and Node.js do not understand TypeScript directly — they only understand JavaScript. The TypeScript compiler translates (transpiles) TypeScript code into standard JavaScript so it can run anywhere.

Q. What happens when you compile?
Ans-:When you compile TypeScript, you're transforming .ts (TypeScript) files into .js (JavaScript) files that can actually run in the browser or Node.js. Let's break down what exactly happens when you run tsc (TypeScript compiler):

Q. What are the different types available in typescript?
Ans-:TypeScript provides a rich set of types to catch errors at compile-time and ensure safer, more maintainable code
| Category     | Types                                                                  |
| ------------ | ---------------------------------------------------------------------- |
| Primitive    | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` |
| Object-based | `object`, `Array<T>`, `Tuple`, `Record`, `Map`, `Set`                  |
| Special      | `any`, `unknown`, `never`, `void`                                      |
| Advanced     | `Literal`, `Union`, `Intersection`, `Function`, `Generic`              |
| Custom       | `interface`, `type` alias                                              |
| Enums        | `enum`                                                                 |


Q.Why does add('1', '2') start showing error when the trainer has defined types?
Ans-: TypeScript checks the types of arguments passed to the function.

It expects both a and b to be of type number.

But you're passing strings ('1', '2') → which violates the type contract

Q.What do you mean typescript can infer the types? What is the advantage of this?
Ans-:TypeScript has a powerful type inference system. It means that you don't always have to explicitly write types — TypeScript is smart enough to figure them out.
Benefits of Type Inference
1.Less Boilerplate
You don't need to write types everywhere — cleaner code.

2.Smart Suggestions
Your editor (like VS Code) will still give autocompletion, type hints, and error checking.

3.Better Readability
You see the logic without unnecessary type annotations.

4.Fewer Mistakes
TypeScript still protects you from wrong types, even if you didn't explicitly write them.

Q.What is the problem with type inferenece sometime and how do you solve with type casting?
Ans-:Type inference is helpful, but it’s not perfect. Sometimes, TypeScript may:

Infer a too generic type (any or unknown)

Infer a less specific type

Not infer what you expect in DOM or third-party code
Solution: Type Casting (aka Type Assertion)

Q.What does tsc init do?
Ans-:in your project directory creates a tsconfig.json file, which is the TypeScript configuration file.
This file tells the TypeScript compiler (tsc) how to compile your project:

Where your files are

Which ECMAScript version to use

Whether to allow JavaScript files

Which strict rules to apply

Output folder, module system, etc.

Q. What does strict mode do?
Ans-: In TypeScript, the strict mode enables a group of strict type-checking options that make your code more robust and less prone to bugs.

Why use strict mode?
Catches bugs early: Type mismatches are detected during development.

Safer code: Makes your assumptions about types explicit.

Better IDE support: TypeScript gives more accurate suggestions and auto-completion.

Helps refactoring: You can safely refactor without fear of breaking things silently.

Q. What does buttonElement ! exactly do ? Why do we put EXCLAMATION MARK( ! ).
Ans-: The exclamation mark (!) in TypeScript is called the non-null assertion operator.

You're telling TypeScript:

"I know this value might be null, but I’m sure it’s not. Trust me."

This bypasses TypeScript's null checking.

Q. Why shouldnt we use any type?
Ans-:You should avoid using any type in TypeScript because it defeats the purpose of using TypeScript in the first place.

Q. How we handle objects?
Ans-:In TypeScript, we handle objects by defining their shape using types — either with type, interface, or inline annotations. This helps TypeScript understand what properties and types exist in the object, enabling type safety, autocompletion, and early error detection.

1. const person: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
2. type Person = {
  name: string;
  age: number;
};

const employee: Person = {
  name: "Bob",
  age: 30,
};
3. interface Car {
  model: string;
  year: number;
}

const car: Car = {
  model: "Toyota",
  year: 2022,
};
4. type Book = {
  title: string;
  author?: string; // Optional
};

const book: Book = { title: "1984" };

5. type Point = {
  readonly x: number;
  readonly y: number;
};

const point: Point = { x: 10, y: 20 };
// point.x = 15; //  Error: Cannot assign to 'x' because it is a read-only property

Q.How do we handle arrays?
Ans-:In TypeScript, arrays are handled with explicit type annotations to ensure all elements in the array are of the expected type. This provides better type safety, code autocompletion, and prevents runtime errors.
EX-:
const numbers: number[] = [1, 2, 3];
const names: string[] = ["Alice", "Bob"];

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Ravi", age: 30 },
  { name: "Meena", age: 25 },
];

Q. What does type keyword do?
Ans-: In TypeScript, the type keyword is used to create custom type aliases. It allows you to give a name to a complex type (such as an object shape, union, or combination of types), making your code more readable and reusable.
Ex-: type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Alice",
  age: 30,
};

type Status = "pending" | "success" | "error";

let responseStatus: Status = "success";

Why use type?
Reusability (define once, use many times)

Improves readability

Helps organize complex types

Enables abstraction without classes or interfaces

Q. Interface are more frequently used than types. What do you think is the advantage of interfaces?
Ans-:In TypeScript, interfaces are often preferred in large-scale projects, especially for defining object shapes and class contracts.

Ex-: interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Alice",
  age: 25,
};

ex-: interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

const emp: Employee = {
  name: "Bob",
  salary: 50000,
};
Ex-: interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

Q. How is an array a generic?
Ans-: In TypeScript, arrays are considered generics because you can explicitly specify the type of elements they contain using angle brackets <T>, just like with other generic constructs.
What is a generic?
A generic is a way to make components (functions, classes, types) work with any data type while preserving type safety.
 Why is an array a generic?
The built-in Array type is actually defined like this in TypeScript:

type Array<T> = T[];
const numbers: Array<number> = [1, 2, 3];
const names: Array<string> = ["Alice", "Bob"];

Q. Why do we need to change the target to es6?
Ans-: Changing the target to ES6 (or later) in TypeScript’s tsconfig.json tells the TypeScript compiler which version of JavaScript to output after compilation. By default, TypeScript may target an older version like ES5 for compatibility, but upgrading to ES6 brings several advantages.

Q. How does generics work with promises.
Ans-: Generics work beautifully with Promise in TypeScript to help you define the type of the resolved value. This gives you type safety, auto-completion, and avoids runtime errors.
Ex-: Basic Syntax of Generics with Promise

const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
};

Ex-: type User = {
  id: number;
  name: string;
};

const getUser = (): Promise<User> => {
  return new Promise((resolve) => {
    resolve({ id: 1, name: "Alice" });
  });
};

getUser().then((user) => {
  console.log(user.name); // Safe: user is inferred as User
});


Q. Why do we need to install types/node? What does it do?

Ans-:Because Node.js is not built with TypeScript, and by default, TypeScript doesn't know about Node's global types like process, __dirname, Buffer, require, etc.
What does @types/node do?
It provides type definitions for all Node.js core modules — such as:

fs, path, http, crypto, child_process, etc.

Global variables like process, __dirname, setTimeout, etc.

Q. Why do we need to install types/express? What does it do?
Ans-:Because Express is originally written in JavaScript, and it doesn’t include TypeScript types by default.

Q. What is the need for changing moduleresolution to es6?
Ans-: Changing the moduleResolution to "ES6" (or "NodeNext" in newer setups) in a TypeScript project is sometimes necessary depending on how you import files and how your project is structured.

Q. Import keyword is very similar to require keyword. What do you think?
Ans-: Yes — on the surface, import and require seem similar because both are used to load modules in JavaScript/TypeScript. But they are quite different under the hood in terms of syntax, timing, and capabilities.

Q. How to use import keyword?
Ans-: The import keyword in TypeScript (and modern JavaScript) is used to bring in modules, objects, functions, or types from other files or packages.
Ex-:// math.ts
export default function add(a: number, b: number) {
  return a + b;
}

// main.ts
import add from './math';

console.log(add(2, 3)); // 5

Q. How does import { Router } from 'express'. work. What does { } this do?
Ans-: Router is a named export from the express module
import { Router } from 'express';

The curly braces {} are used to destructure named exports from a module.
// In express/index.d.ts or internally
export declare function Router(): Router;
export default express;

Q. What do you mean by interface?Why do we have to create it for todos type?
Ans-:An interface in TypeScript is used to define the structure of an object. It tells TypeScript what properties and types an object should have — almost like a contract for the object.

interface Todo {
  id: string;
  name: string;
}

Q. What are named exports and default exports?
Ans-: Named exports allow you to export multiple values from a file by name.
// mathUtils.ts
export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;

Q. What is type casting
Ans-:Type casting in TypeScript is the process of explicitly telling the compiler to treat a value as a specific type.

It's helpful when you're certain about the type of a value but TypeScript either doesn't know or infers it differently.

 Why Use Type Casting?
To:

Avoid TypeScript type errors

Access properties/methods safely

Convert between types (especially from unknown, any, or DOM types)

Q. What is the need of RequestBody and RequestParams?
Ans-:In TypeScript with Express, RequestBody and RequestParams are used to clearly define the shape of the incoming data in your HTTP request.

They help with:

 Type safety
 Autocompletion
 Preventing bugs

