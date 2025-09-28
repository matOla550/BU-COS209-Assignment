class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks!`;
  }
}

const dog1 = new Dog("Ruby", "German Shepherd");
console.log(dog1.speak()); 
