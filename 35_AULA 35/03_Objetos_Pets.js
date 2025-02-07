class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} is making a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} is barking.`);
  }

  fetch() {
    console.log(`${this.name} is fetching a ball.`);
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  speak() {
    console.log(`${this.name} is meowing.`);
  }

  purr() {
    console.log(`${this.name} is purring.`);
  }
}

const dog = new Dog("Buddy", 5, "Golden Retriever");
const cat = new Cat("Whiskers", 3, "Orange");

dog.speak(); // Output: Buddy is barking.
dog.fetch(); // Output: Buddy is fetching a ball.

cat.speak(); // Output: Whiskers is meowing.
cat.purr(); // Output: Whiskers is purring.
