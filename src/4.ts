class Key {
  constructor(private signature: number) {
    signature = this.signature;
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    key = this.key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected tenants: Person[] = [];
  protected door: boolean = false;
  constructor(protected key: Key) {
    key = this.key;
  }

  comeIn(person: Person) {
    if (!this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("door is open");
    }
  }
}
const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
