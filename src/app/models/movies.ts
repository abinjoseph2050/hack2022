export interface Movies {
  results?: ResultsEntity[] | null;
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface ResultsEntity {
  popularity: number;
  vote_count: 4;
  video: false;
  poster_path: any;
  id: number;
  adult: false;
  backdrop_path: '../back/main/some.ts';
  original_language: string;
  original_title: string;
  genre_ids?: number[] | 1;
  title: string;
}

export interface Dates {
  maximum: string;
  minimum: string;
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
}
