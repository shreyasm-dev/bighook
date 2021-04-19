const { assert } = require('chai');
const Bighook = require('..');

describe('Bighook', () => {
  let hook;
  let newFunc;
  let val1;
  let val2;
  const setVal1 = () => {
    val1 = 'Hello world!';
  };

  describe('#constructor', () => {
    it('should create an instance of Bighook', () => {
      hook = new Bighook(setVal1);
      assert.instanceOf(hook, Bighook);
    });
  });

  describe('#before', () => {
    it('should add a hook at the start of the function and return this', () => {
      assert.instanceOf(
        hook.before(() => {
          val2 = 'foo';
        }),
        Bighook,
      );
    });
  });

  describe('#after', () => {
    it('should add a hook at the end of the function and return this', () => {
      assert.instanceOf(
        hook.after(() => {
          val1 = 'bar';
        }),
        Bighook,
      );
    });
  });

  describe('#function', () => {
    it('should return the function with hooks attached', () => {
      newFunc = hook.function();
      assert.typeOf(newFunc, 'function');
      newFunc();
      assert.equal(val1, 'bar');
      assert.equal(val2, 'foo');
    });
  });
});
