class Animal {
  constructor(species, age, color, weight) {
    this.species = species;
    this.age = age;
    this.color = color;
    this.weight = weight;
  }
  sayHello() {
    console.log(`Hello, I am a ${this.color} ${this.species} who is ${this.age} years old and weighs ${this.weight} pounds.`);
  }
}

class Cat extends Animal {
  constructor(species, age, color, weight, breed, isIndoor) {
    super(species, age, color, weight);
    this.breed = breed;
    this.isIndoor = isIndoor;
  }
}

class Dog extends Animal {
  constructor(species, age, color, weight, breed, isFriendly) {
    super(species, age, color, weight);
    this.breed = breed;
    this.isFriendly = isFriendly;
  }
}

const cat1 = new Cat("Cat", 2, "black", 5, "Persian", true);
const cat2 = new Cat("Cat", 4, "gray", 7, "Siamese", false);
const cat3 = new Cat("Cat", 1, "white", 3, "Sphynx", true);
const dog1 = new Dog("Dog", 3, "brown", 25, "Labrador Retriever", true);
const dog2 = new Dog("Dog", 7, "black", 30, "German Shepherd", false);
const dog3 = new Dog("Dog", 2, "white", 20, "Siberian Husky", true);

const animals = [cat1, cat2, cat3, dog1, dog2, dog3];

cat1.sayHello()
dog3.sayHello()