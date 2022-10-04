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

<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Checkbox configuration</h2>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
    </section>

    <section class="example-section">
      <label class="example-margin">Align:</label>
      <mat-radio-group [(ngModel)]="labelPosition">
        <mat-radio-button class="example-margin" value="after">After</mat-radio-button>
        <mat-radio-button class="example-margin" value="before">Before</mat-radio-button>
      </mat-radio-group>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>

<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>

    <section class="example-section">
      <mat-checkbox
          class="example-margin"
          [(ngModel)]="checked"
          [(indeterminate)]="indeterminate"
          [labelPosition]="labelPosition"
          [disabled]="disabled">
        I'm a checkbox
      </mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>

export interface Dates {
  maximum: string;
  minimum: string;
}
export class EmployeeClass {
  private id: number;
  private firstName: string;
  private lastName: string;
  private salary:string;

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

// Table Feature
<div ng-app="myApp" ng-controller="customersCtrl">

<table>
  <tr ng-repeat="x in names">
    <td>{{ x.Name }}</td>
    <td>{{ x.Country }}</td>
  </tr>
</table>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("customers.php")
  .then(function (response) {$scope.names = response.data.records;});
});
</script>

