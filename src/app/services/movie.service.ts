import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  
  private _calculateOffset(fontSize: number) {
    let linesDiffernce = (fontSize * 27) / 14;
    let lines:number = 27 - (linesDiffernce - 27);
    this.LINE_OFFSET = Math.floor(lines);
    if (fontSize >= 17 && fontSize <= 20) {
        this.LINE_OFFSET += (Math.floor(fontSize / 3) - 2);
    }
    if (fontSize > 20 && fontSize <= 23) {
        this.LINE_OFFSET += (Math.floor(fontSize / 2) - 2);
    }
    if (fontSize > 23 && fontSize <= 25) {
        this.LINE_OFFSET += (Math.floor(fontSize / 2));}
    if (fontSize > 25 && fontSize <= 27) {
        this.LINE_OFFSET += (Math.floor(fontSize / 2) + 1);
    }
    if (fontSize > 27 && fontSize <= 30) {
        this.LINE_OFFSET += (Math.floor(fontSize / 2) + 4);
    }
}
}
export class EmployeeClass {
  private id: number;
  private firstName: string;
  private lastName: string;
  private salary: number;

  constructor(id: number, firstName: string, lastName, salary: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getYearlySalary(): number {
    return 12 * this.salary;
  }
  
  getNameWithSalary(name:string,salary:number){
    return `Mr./ Ms. ${name} is working with a package of monthly salary ${salary}`;
  }
}

import {Component} from '@angular/core';

/**
 * @title Button toggle selection mode
 */
@Component({
  selector: 'button-toggle-mode-example',
  templateUrl: 'button-toggle-mode-example.html',
})
export class ButtonToggleModeExample {}

