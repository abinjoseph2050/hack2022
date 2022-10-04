import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

<ol>
  <li>
    <mat-form-field appearance="fill">
      <mat-label>What's your name?</mat-label>
      <input matInput [(ngModel)]="name">
    </mat-form-field>
  </li>
  <li>
    <button mat-raised-button (click)="openDialog()">Pick one</button>
  </li>
  <li *ngIf="animal">
    You chose: <i>{{animal}}</i>
  </li>
</ol>
