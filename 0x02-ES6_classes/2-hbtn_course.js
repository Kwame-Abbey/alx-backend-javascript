export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /* Getter for name attribute */
  get name() {
    return this._name;
  }

  /* Getter for length attribute */
  get length() {
    return this._length;
  }

  /* Getter for students attribute */
  get students() {
    return this._students;
  }

  /* setter for name attribute */
  set name(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = val;
    }
  }

  /* setter for length attribute */
  set length(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = val;
    }
  }

  /* setter for students attribute */
  set students(val) {
    if (typeof (val) === 'object') {
      for (const student of val) {
        if (typeof (student) !== 'string') {
          throw new TypeError('Student must be an array');
        }
      }
    } else {
      throw new TypeError('Student must be an array of strings');
    }
    this._students = val;
  }
}
