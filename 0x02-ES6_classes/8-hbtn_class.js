export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Casting to a Number returns the size
  valueOf() {
    return this._size;
  }

  // Casting to a String returns the location
  toString() {
    return this._location;
  }
}
