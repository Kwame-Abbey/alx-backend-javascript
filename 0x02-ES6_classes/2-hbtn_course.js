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

  /* Setter for name attribute */
  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = val;
    }
  }

  /* Setter for length attribute */
  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = val;
    }
  }

  /* Setter for students attribute */
  set students(val) {
    if (!Array.isArray(val) || !val.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._students = val;
    }
  }
}
