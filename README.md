# Node.js and TypeScript Project

A comprehensive Node.js application built with TypeScript that demonstrates
various TypeScript features, Express.js backend setup, and frontend DOM
manipulation.

## 🎯 Overview

This project is a learning and demonstration project that showcases:

- TypeScript type system and advanced features
- Express.js server setup
- Frontend DOM manipulation with TypeScript
- Type-safe JavaScript development

## ✨ Features

### Frontend Features

- **Interactive Calculator**: Simple addition calculator with two number inputs
- **Type-safe DOM Manipulation**: TypeScript interfaces for HTML elements
- **Result Tracking**: Stores both numeric and string results in separate arrays
- **Real-time Result Display**: Updates result immediately on button click
- **Promise-based Asynchronous Operations**: Demonstrates Promise handling with
  TypeScript

### Backend Features

- **Express.js Server**: Configured to run on port 3000
- **Modular Route Structure**: Organized routing with separate route files
- **Type-safe Backend**: Full TypeScript support for Node.js

### TypeScript Features

- **Union Types**: `NumOrString` type for flexible parameter handling
- **Type Aliases**: Custom type definitions for better code organization
- **Interfaces**: `ResultObj` interface for structured data
- **Type Guards**: Runtime type checking with `typeof`
- **Generic Promises**: Type-safe Promise handling
- **Strict Type Checking**: Enabled for maximum type safety

## 📁 Project Structure

```
NodeJs-and-TypeScript/
├── app.ts              # Main application file (frontend logic + Express setup)
├── app.js              # Compiled JavaScript output
├── app.d.ts            # TypeScript declaration file
├── index.html          # Frontend HTML page
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── routes/
    └── todoc.ts        # Todo routes (modular routing structure)
```

## 🛠 Technologies Used

- **Node.js**: JavaScript runtime environment
- **TypeScript**: Typed superset of JavaScript
- **Express.js**: Web framework for Node.js
- **Body Parser**: Middleware for parsing request bodies

### Development Dependencies

- `@types/express`: TypeScript definitions for Express
- `@types/node`: TypeScript definitions for Node.js

## 🚀 Usage

### Running the Application

1. **Start the Express server**
   ```bash
   node app.js
   ```
   The server will start on `http://localhost:3000`

2. **Open the frontend**
   - Open `index.html` in your web browser
   - Or serve it through the Express server (if configured)

3. **Use the Calculator**
   - Enter two numbers in the input fields
   - Click the "Add" button
   - View the result displayed below

### Frontend Functionality

The calculator performs the following operations:

- **Numeric Addition**: Adds two numbers when both inputs are numeric
- **String Concatenation**: Concatenates two strings with a space separator
- **Type Coercion**: Handles mixed number/string inputs by converting to numbers
- **Result Storage**: Maintains separate arrays for numeric and string results
- **Console Logging**: Logs results and timestamps for debugging

## 📚 TypeScript Features Demonstrated

### 1. Union Types

```typescript
type NumOrString = number | string;
```

Allows a variable to accept multiple types, providing flexibility while
maintaining type safety.

### 2. Type Aliases

```typescript
type Result = { val: number; timestamp: Date };
```

Creates reusable type definitions for better code organization.

### 3. Interfaces

```typescript
interface ResultObj {
    val: number;
    timestamp: Date;
}
```

Defines contracts for object structures, ensuring type safety.

### 4. Type Guards

```typescript
if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
}
```

Runtime type checking to narrow types and enable type-specific operations.

### 5. Generic Promises

```typescript
const myPromise = new Promise<string>((resolve, reject) => {
    // ...
});
```

Type-safe Promise handling with explicit return types.

### 6. Type Assertions

```typescript
const num1Element = document.getElementById("num1") as HTMLInputElement;
```

Tells TypeScript the specific type of an element when it can't be inferred.

### 7. Array Typing

```typescript
const numResults: Array<number> = [];
const textResults: string[] = [];
```

Multiple ways to define typed arrays in TypeScript.

## 🔌 API Routes

### Current Routes

- **Todo Routes**: `/routes/todoc.ts` - Currently set up as a modular router
  (ready for implementation)

### Express Server

- **Port**: 3000
- **Status**: Server is configured and listening (ready for route
  implementation)

## 💻 Development

### TypeScript Configuration

The project uses strict TypeScript settings:

- **Strict Mode**: Enabled for maximum type safety
- **Target**: ES2020
- **Module System**: NodeNext
- **Source Maps**: Enabled for debugging
- **Declaration Files**: Generated for type definitions

### Compiling TypeScript

```bash
# Compile TypeScript to JavaScript
npx tsc

# Watch mode (auto-compile on changes)
npx tsc --watch
```

### Key Functions

#### `add(num1: NumOrString, num2: NumOrString)`

- Handles addition of numbers or concatenation of strings
- Uses type guards to determine the operation
- Returns the appropriate result type

#### `printResult(resultObj: ResultObj)`

- Logs the result value to the console
- Accepts a typed ResultObj interface

#### Event Listener

- Attached to the "Add" button
- Captures input values, performs calculation
- Updates DOM and stores results in arrays
- Logs results with timestamps

## 🔧 Configuration

### TypeScript (`tsconfig.json`)

- Strict type checking enabled
- Source maps for debugging
- Declaration files generated
- ES2020 target
- NodeNext module resolution

### Package Management

- Uses npm for dependency management
- CommonJS module type
- Express.js and body-parser as dependencies

## 📝 Notes

- The frontend code is designed to work with the HTML page (`index.html`)
- The Express server is set up but currently only listens on port 3000
- The todo routes file is prepared for future route implementations
- All TypeScript features are demonstrated in the main `app.ts` file

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Shailesh Purohit

---

**Note**: This project is primarily for learning and demonstrating TypeScript
features with Node.js and Express.js. It serves as a reference for TypeScript
best practices and common patterns.
