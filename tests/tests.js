'use strict';
const Intern = require('../app/employee.js').Intern;
const Associate = require('../app/employee.js').Associate;

describe("Employee Class: Create Intern class and calculate its's salary", function() {
	it("The Intern should be a property of the Employee", function() {
      var tope  = new Intern('Tope', 'Alabi', 'Intern', 1);
      expect(tope.salary()).toBe(36500);
    });
    it("The Intern should be a property of the Employee", function() {
      var tolu  = new Associate('Tolu', 'Alade', 'Associate', 2);
      expect(tolu.salary()).toBe(56000);
    });

});