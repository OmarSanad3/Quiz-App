const QUESTIONS = [
  {
    question: "What is an object in JavaScript?",
    answers: [
      "A primitive data type",
      "A collection of properties",
      "A method",
      "A loop statement",
    ],
    correctAnswer: "A collection of properties",
  },
  {
    question: "How do you create an empty object in JavaScript?",
    answers: [
      "let obj = {};",
      "let obj = [];",
      "let obj = Object();",
      "let obj = new Array();",
    ],
    correctAnswer: "let obj = {};",
  },
  {
    question: "How do you add a property to an object in JavaScript?",
    answers: [
      "obj['key'] = value;",
      "obj.key(value);",
      "obj.add(key, value);",
      "obj.set(key, value);",
    ],
    correctAnswer: "obj['key'] = value;",
  },
  {
    question:
      "Which method is used to convert a JavaScript object to a JSON string?",
    answers: [
      "JSON.parse()",
      "JSON.stringify()",
      "toString()",
      "Object.toJSON()",
    ],
    correctAnswer: "JSON.stringify()",
  },
  {
    question: "How do you check if a property exists in an object?",
    answers: [
      "'key' in obj",
      "obj.has(key)",
      "obj.exist(key)",
      "Object.exists(key, obj)",
    ],
    correctAnswer: "'key' in obj",
  },
  {
    question: "Which of the following is not a method of Object?",
    answers: [
      "Object.keys()",
      "Object.values()",
      "Object.map()",
      "Object.entries()",
    ],
    correctAnswer: "Object.map()",
  },
  {
    question: "How do you iterate over the properties of an object?",
    answers: [
      "for (let i = 0; i < obj.length; i++)",
      "obj.forEach()",
      "for (let key in obj)",
      "obj.map()",
    ],
    correctAnswer: "for (let key in obj)",
  },
  {
    question: "How do you delete a property from an object?",
    answers: [
      "remove obj.key;",
      "delete obj.key;",
      "obj.delete(key);",
      "obj.key = null;",
    ],
    correctAnswer: "delete obj.key;",
  },
  {
    question: "What does Object.assign() do?",
    answers: [
      "Creates a deep copy of an object",
      "Merges objects",
      "Deletes a property from an object",
      "Converts an object to an array",
    ],
    correctAnswer: "Merges objects",
  },
  {
    question: "How can you prevent adding new properties to an object?",
    answers: [
      "Object.freeze(obj)",
      "Object.seal(obj)",
      "Object.preventExtensions(obj)",
      "Object.lock(obj)",
    ],
    correctAnswer: "Object.preventExtensions(obj)",
  },
  {
    question: "How do you make an object immutable?",
    answers: [
      "Object.seal(obj)",
      "Object.preventExtensions(obj)",
      "Object.freeze(obj)",
      "Object.lock(obj)",
    ],
    correctAnswer: "Object.freeze(obj)",
  },
  {
    question: "What does Object.keys(obj) return?",
    answers: [
      "An array of object values",
      "An array of object keys",
      "An array of key-value pairs",
      "A JSON string of the object",
    ],
    correctAnswer: "An array of object keys",
  },
  {
    question: "How do you merge two objects?",
    answers: [
      "Object.concat(obj1, obj2)",
      "Object.merge(obj1, obj2)",
      "Object.assign(obj1, obj2)",
      "Object.extend(obj1, obj2)",
    ],
    correctAnswer: "Object.assign(obj1, obj2)",
  },
  {
    question: "What is a method in a JavaScript object?",
    answers: [
      "A function property",
      "A primitive data type",
      "A string property",
      "An event handler",
    ],
    correctAnswer: "A function property",
  },
  {
    question: "What is the output of 'typeof {}'?",
    answers: ["'array'", "'object'", "'function'", "'null'"],
    correctAnswer: "'object'",
  },
  {
    question:
      "Which method is used to create a new object with a specified prototype?",
    answers: [
      "Object.create()",
      "Object.new()",
      "Object.prototype()",
      "Object.make()",
    ],
    correctAnswer: "Object.create()",
  },
  {
    question: "What does Object.seal(obj) do?",
    answers: [
      "Prevents new properties from being added and existing properties from being deleted",
      "Prevents all modifications to an object",
      "Creates a deep copy of an object",
      "Locks the object in a read-only state",
    ],
    correctAnswer:
      "Prevents new properties from being added and existing properties from being deleted",
  },
  {
    question: "How can you clone an object?",
    answers: [
      "obj.clone()",
      "Object.copy(obj)",
      "Object.assign({}, obj)",
      "Object.duplicate(obj)",
    ],
    correctAnswer: "Object.assign({}, obj)",
  },
  {
    question: "What does Object.freeze(obj) prevent?",
    answers: [
      "Adding new properties",
      "Deleting existing properties",
      "Modifying existing properties",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "What will 'obj.hasOwnProperty('key')' return?",
    answers: [
      "The value of the key if it exists",
      "A boolean indicating if the key exists",
      "Undefined if the key doesn’t exist",
      "An error if the key doesn’t exist",
    ],
    correctAnswer: "A boolean indicating if the key exists",
  },
  {
    question:
      "Which method returns an array of a given object's property names?",
    answers: [
      "Object.getOwnPropertyNames()",
      "Object.getPropertyNames()",
      "Object.keys()",
      "Object.names()",
    ],
    correctAnswer: "Object.getOwnPropertyNames()",
  },
  {
    question: "What does the 'this' keyword refer to inside an object method?",
    answers: [
      "The global object",
      "The object itself",
      "The window object",
      "The method itself",
    ],
    correctAnswer: "The object itself",
  },
  {
    question: "What is prototype in JavaScript?",
    answers: [
      "A function",
      "A built-in object",
      "An object from which other objects inherit properties",
      "A method",
    ],
    correctAnswer: "An object from which other objects inherit properties",
  },
  {
    question: "What is the prototype chain?",
    answers: [
      "A series of objects linked together by inheritance",
      "A list of all properties in an object",
      "A chain of method calls on an object",
      "A function that calls itself",
    ],
    correctAnswer: "A series of objects linked together by inheritance",
  },
  {
    question:
      "Which of these is a correct way to create a method in an object?",
    answers: [
      "methodName: function() {}",
      "function methodName() {}",
      "methodName() {}",
      "this.methodName = function() {}",
    ],
    correctAnswer: "methodName: function() {}",
  },
  {
    question:
      "How do you access the value of an object's property using a variable?",
    answers: ["obj.var", "obj['var']", "obj(var)", "obj->var"],
    correctAnswer: "obj['var']",
  },
  {
    question: "How do you access all values in an object?",
    answers: [
      "Object.keys()",
      "Object.values()",
      "Object.entries()",
      "Object.allValues()",
    ],
    correctAnswer: "Object.values()",
  },
  {
    question: "Which keyword is used to define a new class in JavaScript?",
    answers: ["class", "object", "function", "prototype"],
    correctAnswer: "class",
  },
  {
    question: "How do you define a constructor inside a JavaScript class?",
    answers: [
      "constructor: function() {}",
      "function constructor() {}",
      "constructor() {}",
      "this.constructor = function() {}",
    ],
    correctAnswer: "constructor() {}",
  },
  {
    question: "What is the default prototype of all JavaScript objects?",
    answers: [
      "Object.prototype",
      "Function.prototype",
      "Array.prototype",
      "null",
    ],
    correctAnswer: "Object.prototype",
  },
];

export default QUESTIONS;