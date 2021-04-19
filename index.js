class Bighook {
  constructor(func) {
    this.func = func;
  }

  function() {
    return () => {
      this.func();
    };
  }
}

module.exports = Bighook;
