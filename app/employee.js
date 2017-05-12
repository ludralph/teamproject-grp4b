'use strict';

class Manager extends Employee{

  constructor(firstName, lastName,employeeType,yearsEmployed){
    super(firstName,lastName,employeeType,yearsEmployed);
  }

  this.level = 4;

  if (this.yearsEmployed > 0){
    this.bonus = 1500 * yearsEmployed;
  }
  else{
    this.bonus = 0;
  }
}

class Executive extends Employee{
  constructor(firstName, lastName,employeeType,yearsEmployed){
    super(firstName,lastName,employeeType,yearsEmployed);
  }
  this.level = 5;
  if (yearsEmployed > 0){
    this.bonus = 2000 * yearsEmployed;
  }
  else{
    this.bonus = 0;
  }
}

class  Director extends Employee{} {
  constructor(firstName, lastName,employeeType,yearsEmployed){
    super(firstName,lastName,employeeType,yearsEmployed);
  }
  this.level = 6;
  if (yearsEmployed > 0){
    this.bonus = 2500 * yearsEmployed;
  }
  else{
    this.bonus = 0;
  }

}

module.exports{
  Manager:manager,
  Executive:executive,
  Director:director
}
