export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  set maxStudentsSize(newStudentsSize) {
    if (typeof newStudentsSize === 'number') {
      this._maxStudentsSize = newStudentsSize;
    }
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
