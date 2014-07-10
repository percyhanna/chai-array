(function (chaiArray) {
  // Module systems magic dance.
  if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    // NodeJS
    module.exports = chaiArray;
  } else if (typeof define === "function" && define.amd) {
    // AMD
    define(function () {
      return function (chai, utils) {
        return chaiArray(chai, utils);
      };
    });
  } else {
    // Other environment (usually <script> tag): plug in to global chai instance directly.
    chai.use(function (chai, utils) {
      return chaiArray(chai, utils);
    });
  }
}(function (chai, utils) {
  var flag = utils.flag;

  var first = function () {
    var actual, array = flag(this, 'object');

    new chai.Assertion(array).to.exist;

    actual = array[0];
    flag(this, 'object', actual);
  };

  chai.Assertion.addProperty('first', first);
  chai.Assertion.addProperty('firstValue', first);

  var last = function () {
    var actual, array = flag(this, 'object');

    new chai.Assertion(array).to.exist;

    actual = array[array.length - 1];
    flag(this, 'object', actual);
  };

  chai.Assertion.addProperty('last', last);
  chai.Assertion.addProperty('lastValue', last);

  chai.Assertion.addMethod('atIndex', function (index) {
    var actual, array = flag(this, 'object');

    new chai.Assertion(array).to.exist;

    actual = array[index];

    flag(this, 'object', actual);
  });
}));
