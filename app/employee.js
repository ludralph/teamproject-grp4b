'use strict';
class Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeType = employeeType;
		this.yearsEmployed = yearsEmployed;
		this.minimumWage = 18,000;
		this.salary = 0;
	}
	get Salary(){
		this.salary = this.minimumWage * this.level
		if(this.bonus !== 0){
			this.salary = this.salary + this.bonus;
			return this.salary;
		}
			return this.salary;
	}
}

class Intern extends Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		super(firstName,lastName,employeeType,yearsEmployed);
		this.level = 2;
		if(this.yearsEmployed > 0){
			this.bonus = 500 * this.yearsEmployed;
		}else{
			this.bonus = 0;
		}
	}

}

class Associate extends Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		super(firstName,lastName,employeeType,yearsEmployed);
		this.level = 3;
		if(this.yearsEmployed > 0){
			this.bonus = 1000 * this.yearsEmployed;
		}else{
			this.bonus = 0;
		}
	}
	
}

module.exports={
	Intern: Intern,
	Associate: Associate,
}