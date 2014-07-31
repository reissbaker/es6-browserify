class A {
  constructor(something) {
    this.something = something;
  }
}

class B extends A {
  constructor() {
    super('B');
  }
}

module.exports = A;
