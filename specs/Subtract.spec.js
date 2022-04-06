var chai = require("chai");
var expect = chai.expect;

var Subtract = require("../src/Subtract.js");
var yourObj = new Subtract();

describe("Test suit ", function() {
  it("should return sum of the numbers", function() {
    expect(yourObj.addSubtract(1, 2, true)).to.equal(3);
  });
});

// Root level hook
beforeEach(function() {
  console.log("------------ Root level hook in yourClass.spec.js");
});