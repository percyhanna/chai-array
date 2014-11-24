describe("React assertions", function() {
  chai.use(function (chai, utils) {
    inspect = utils.objDisplay;

    chai.Assertion.addMethod('fail', function (message) {
      var obj = utils.flag(this, 'object');

      new chai.Assertion(obj).is.a('function');

      try {
        obj();
      } catch (err) {
        this.assert(
          err instanceof chai.AssertionError,
          'expected #{this} to fail, but it threw ' + inspect(err)
        );

        this.assert(
          err.message === message,
          'expected #{this} to fail with ' + inspect(message) + ', but got ' + inspect(err.message)
        );

        return;
      }

      this.assert(false, 'expected #{this} to fail');
    });
  });

  describe('first', function () {
    it('changes the object to the first item in the array', function () {
      expect([1, 2, 3]).first.to.equal(1);
    });

    it('returns first character for string values', function () {
      expect('abc').first.to.equal('a');
    });

    it('returns undefined for numeric values', function () {
      expect(1).first.to.equal(undefined);
    });

    it('fails for null values', function () {
      expect(function () {
        expect(null).first.to.equal(null);
      }).to.fail('expected null to exist');
    });
  });

  describe('second', function () {
    it('changes the object to the second item in the array', function () {
      expect([1, 2, 3]).second.to.equal(2);
    });

    it('returns second character for string values', function () {
      expect('abc').second.to.equal('b');
    });

    it('returns undefined for numeric values', function () {
      expect(1).second.to.equal(undefined);
    });

    it('fails for null values', function () {
      expect(function () {
        expect(null).second.to.equal(null);
      }).to.fail('expected null to exist');
    });
  });

  describe('third', function () {
    it('changes the object to the third item in the array', function () {
      expect([1, 2, 3]).third.to.equal(3);
    });

    it('returns third character for string values', function () {
      expect('abc').third.to.equal('c');
    });

    it('returns undefined for numeric values', function () {
      expect(1).third.to.equal(undefined);
    });

    it('fails for null values', function () {
      expect(function () {
        expect(null).third.to.equal(null);
      }).to.fail('expected null to exist');
    });
  });

  describe('last', function () {
    it('changes the object to the last item in the array', function () {
      expect([1, 2, 3]).last.to.equal(3);
    });

    it('returns last character for string values', function () {
      expect('abc').last.to.equal('c');
    });

    it('returns undefined for numeric values', function () {
      expect(1).last.to.equal(undefined);
    });

    it('fails for null values', function () {
      expect(function () {
        expect(null).last.to.equal(null);
      }).to.fail('expected null to exist');
    });
  });

  describe('atIndex', function () {
    it('changes the object to the specified item in the array', function () {
      expect([1, 2, 3]).atIndex(1).to.equal(2);
    });

    it('returns specified character for string values', function () {
      expect('abc').atIndex(1).to.equal('b');
    });

    it('returns undefined for numeric values', function () {
      expect(1).atIndex(1).to.equal(undefined);
    });

    it('fails for null values', function () {
      expect(function () {
        expect(null).atIndex(1).to.equal(null);
      }).to.fail('expected null to exist');
    });
  });
});
