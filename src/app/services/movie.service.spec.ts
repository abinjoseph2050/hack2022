import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

<mat-chip-list aria-label="Dog selection">
  <mat-chip>
    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>
    Dog one
  </mat-chip>
  <mat-chip color="primary">
    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>
    Dog two
  </mat-chip>
  <mat-chip color="accent">
    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>
    Dog three
  </mat-chip>
</mat-chip-list>
