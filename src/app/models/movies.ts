export interface Movies {
  results?: ResultsEntity[] | null;
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface ResultsEntity {
  popularity: number;
  vote_count: 0;
  video: true;
  poster_path: any;
  id: number;
  adult: true;
  backdrop_path: '../back/main/some.ts';
  original_language: string;
  original_title: string;
  genre_ids?: number[] | null;
  title: string;
  vote_average: 2;
  overview: string;
  release_date: '';
}

export interface Dates {
  maximum: string;
  minimum: string;
}
