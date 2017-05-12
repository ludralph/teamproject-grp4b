'use strict';
class Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeType = employeeType;
		this.yearsEmployed = yearsEmployed;
		this.minimumWage = 18000;
		this.totalSalary = 0;
	}
		Salary(){
		this.totalSalary = this.minimumWage * this.level
		if(this.bonus !== 0){
			this.totalSalary = this.totalSalary + this.bonus;
			return this.totalSalary;
		}
			return this.totalSalary;
	}
}

class Intern extends Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		super(firstName,lastName,employeeType,yearsEmployed);
		this.level = 2;
		if(yearsEmployed > 0){
			this.bonus = 500 * yearsEmployed;
		}else{
			this.bonus = 0;
		}
	}

}

class Associate extends Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		super(firstName,lastName,employeeType,yearsEmployed);
		this.level = 3;
		if(yearsEmployed > 0){
			this.bonus = 1000 * yearsEmployed;
		}else{
			this.bonus = 0;
		}
	}

}

class Manager extends Employee{

  constructor(firstName, lastName,employeeType,yearsEmployed){
  		super(firstName,lastName,employeeType,yearsEmployed);
    	this.level = 4;
    	if (yearsEmployed > 0){
    		this.bonus = 1500 * yearsEmployed;
  		}else{
    		this.bonus = 0;
  		}
    }

}

class Executive extends Employee{
  constructor(firstName, lastName,employeeType,yearsEmployed){
    super(firstName,lastName,employeeType,yearsEmployed);
    this.level = 5;
  	if (yearsEmployed > 0){
    	this.bonus = 2000 * yearsEmployed;
  	}else{
    	this.bonus = 0;
  	}
  }
}

class  Director extends Employee{
  constructor(firstName, lastName,employeeType,yearsEmployed){
    super(firstName,lastName,employeeType,yearsEmployed);
    this.level = 6;
  	if (yearsEmployed > 0){
    	this.bonus = 2500 * yearsEmployed;
  	}else{
    	this.bonus = 0;
  	}
  }
}

module.exports = {
  Manager: Manager,
  Executive: Executive,
  Director: Director,
  Intern: Intern,
  Associate: Associate
}
