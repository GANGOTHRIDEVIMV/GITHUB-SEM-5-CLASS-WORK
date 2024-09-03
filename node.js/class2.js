// Old Version
class OldDog { constructor() { this.breed = "Unknown"; } bark() { console.log("Woof!"); } }
class OldCat { constructor() { this.color = "Unknown"; } meow() { console.log("Meow!"); } }

// New Version
class NewDog { constructor(breed = "Rottweiler") { this.breed = breed; } bark() { console.log("Woof!"); } }
class NewCat { constructor(color = "Black") { this.color = color; } meow() { console.log("Meow!"); } }

// Usage
let oldDog = new OldDog(); oldDog.bark();
let newDog = new NewDog(); newDog.bark();
let oldCat = new OldCat(); oldCat.meow();
let newCat = new NewCat(); newCat.meow();
