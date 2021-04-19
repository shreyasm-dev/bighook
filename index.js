/**
 * Bighook class
 * @class
 */

class Bighook {
  /**
   * Constructor for Bighook
   * @param {Function} func - Function to add hooks on to
   */

  constructor(func) {
    this.func = func;
  }

  /**
   * Add a hook to run before the call
   * @param {Function} callback - Function to run as hook
   * @returns {Bighook}
   */

  before(callback) {
    const original = this.func;
    this.func = () => {
      callback();
      return original();
    };

    return this;
  }

  /**
   * Add a hook to run after the call
   * @param {Function} callback - Function to run as hook
   * @returns {Bighook}
   */

  after(callback) {
    const original = this.func;
    this.func = () => {
      const returnVal = original();
      callback();
      return returnVal;
    };

    return this;
  }

  /**
   * Get the function with hooks attached
   * @returns {Function}
   */

  function() {
    return () => {
      this.func();
    };
  }
}

module.exports = Bighook;
