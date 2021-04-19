class Bighook {
  constructor(func) {
    this.func = func;
  }

  before(callback) {
    const original = this.func;
    this.func = () => {
      callback();
      return original();
    };

    return this;
  }

  after(callback) {
    const original = this.func;
    this.func = () => {
      const returnVal = original();
      callback();
      return returnVal;
    };

    return this;
  }

  function() {
    return () => {
      this.func();
    };
  }
}

module.exports = Bighook;
