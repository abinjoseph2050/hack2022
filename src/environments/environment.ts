// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

<ng-template>
  Hello from the bottom sheet!
</ng-template>

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
<mat-form-field appearance="fill">
  <mat-label>Toppings</mat-label>
  <mat-select [formControl]="toppings" multiple>
    <mat-select-trigger>
      {{toppings.value?.[0] || ''}}
      <span *ngIf="(toppings.value?.length || 0) > 1" class="example-additional-selection">
        (+{{(toppings.value?.length || 0) - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})
      </span>
    </mat-select-trigger>
    <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
</mat-form-field>

// event solutions
<div ng-app="myApp" ng-controller="myCtrl">

<h1 ng-mousemove="count = count + 1">Mouse over me!</h1>

<h2>{{ count }}</h2>

</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.count = 0;
});
</script>
