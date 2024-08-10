class Key {
  private signature: number = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  public getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {
    this.door = false;
    this.key = key;
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Add tenants");
      console.log(this.tenants);
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key === this.key) {
      this.door = true;
      console.log("Door open");
    }
  }
}

const key = new Key();
console.log(key);
const house = new MyHouse(key);
const person = new Person(key);
const person2 = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

house.openDoor(person2.getKey());
house.comeIn(person2);
