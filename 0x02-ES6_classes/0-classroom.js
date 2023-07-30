export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  set _maxStudentsSize(newStudentsSize) {
    if (typeof maxStudentsSize === 'number') {
      this._maxStudentsSize = newStudentsSize;
    } else {
      throw new TypeError('Size of students must be a number!');
    }
  }

  get _maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
