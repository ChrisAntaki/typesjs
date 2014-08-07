var assert = require('assert'),
	t = require('../types');

describe("types.js", function() {



	describe("Pass", function() {
		it("String", function() {
			assert.doesNotThrow(function() {
				t('name', String);
			});
		});

		it("Number", function() {
			assert.doesNotThrow(function() {
				t(1, Number);
			});

			assert.doesNotThrow(function() {
				t(0, Number);
			});

			assert.doesNotThrow(function() {
				t(-1, Number);
			});
		});

		it("Array", function() {
			assert.doesNotThrow(function() {
				t([], Array);
			});
		});

		it("Object", function() {
			assert.doesNotThrow(function() {
				t({}, Object);
			});
		});

		it("Multiple types", function() {
			assert.doesNotThrow(function() {
				t(1, [String, Number]);
			});
		});

		it("CustomType", function() {
			var CustomType = function() {
				this.custom = 2 * true;
			};

			var instance = new CustomType();

			assert.doesNotThrow(function() {
				t(instance, CustomType);
			});
		});
	});



	describe("Fail", function() {
		it("String", function() {
			assert.throws(function() {
				t([], String);
			});
		});

		it("Number", function() {
			assert.throws(function() {
				t([], Number);
			});
			assert.throws(function() {
				t(NaN, Number);
			});
		});

		it("Array", function() {
			assert.throws(function() {
				t('', Array);
			});
		});

		it("Object", function() {
			assert.throws(function() {
				t([], Object);
			});
		});

		it("Multiple types", function() {
			assert.throws(function() {
				t([], [String, Number]);
			});
		});

		it("CustomType", function() {
			var CustomType = function() {
				this.custom = 2 * true;
			};

			var instance = new CustomType();

			assert.throws(function() {
				t([], CustomType);
			});
		});
	});



	describe("Options", function() {
		it("required = false", function() {
			assert.doesNotThrow(function() {
				t(null, String, false);
				t(undefined, String, false);
			});
		});

		it("required = 'optional'", function() {
			assert.doesNotThrow(function() {
				t(null, String, 'optional');
				t(undefined, String, 'optional');
			});
		});
	});



	describe("Settings", function() {
		it("enabled", function() {
			t.enabled = false;

			assert.doesNotThrow(function() {
				t(1999, String);
			});

			t.enabled = true;
		});
	});



	describe("check", function() {
		it("returns", function() {
			assert.doesNotThrow(function() {
				t.check(1999, String);
			});
			assert.equal(t.check(1999, Number), true);
			assert.equal(t.check(1999, String), false);
		});
	});



});
