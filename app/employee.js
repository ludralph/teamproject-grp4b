'use strict';
class Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeType = employeeType;
		this.yearsEmployed = yearsEmployed;
		this.minimumWage = 18000;
		this.totalSalary = 0		
	}	
}

class Intern extends Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		super(firstName,lastName,employeeType,yearsEmployed);
		if (yearsEmployed > 0){
			this.bonus = 500 * yearsEmployed;
		}else{
			this.bonus = 0;
		}
	}

	salary(){
		this.totalSalary = this.minimumWage * 2;
		if(this.bonus !== 0){
			this.totalSalary = this.totalSalary + this.bonus;
			return this.totalSalary;
		}
			return this.totalSalary;
	}
}

class Associate extends Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		super(firstName,lastName,employeeType,yearsEmployed);
		if (yearsEmployed > 0){
			this.bonus = 1000 * yearsEmployed;
		}else{
			this.bonus = 0;
		}
	}
	salary(){
		this.totalSalary = this.minimumWage * 3;
		if(this.bonus !== 0){
			this.totalSalary = this.totalSalary + this.bonus;
			return this.totalSalary;
		}
			return this.totalSalary;
	}
	
}

module.exports={
	Intern: Intern,
	Associate: Associate,
}