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

const Manager = require('../app/employee.js').Manager;
const Executive = require('../app/employee.js').Executive;
const Director = require('../app/employee.js').Director;
const Associate = require('../app/employee.js').Associate;
const Intern = require('../app/employee.js').Intern;

it("The car name and model should be a property of the car", function() {
      var toyin  = new Intern('Toyin', 'Adeola','Intern', 0);
      var tope = new Associate('Tope', 'Ola','Associate', 1);
      var tayo = new Manager('Tayo', 'MOla','Manager', 2);
      var tolu = new Executive('Tolu', 'Dee', 'Executive', 3);
      var temi = new Director('Temi', 'Qeu', 'Director', 4);

      expect(toyin.Salary()).toBe(36000);
      expect(tope.Salary()).toBe(55000);
      expect(tayo.Salary()).toBe(75000);
      expect(tolu.Salary()).toBe(96000);
      expect(temi.Salary()).toBe(118000);

    });
