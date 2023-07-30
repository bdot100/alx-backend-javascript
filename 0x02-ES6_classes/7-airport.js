export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // get name
  get name() {
    return this._name;
  }

  // set name
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Type must be string');
    }
  }

  // get code
  get code() {
    return this._code;
  }

  // set code
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Type must be string');
    }
  }

  // Default string description
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
