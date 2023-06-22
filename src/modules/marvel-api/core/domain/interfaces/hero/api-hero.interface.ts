import { Hero } from 'src/modules/hero/core/domain/hero.entity';

interface Thumbnail {
  path: string;
  extension: string;
}

export interface ApiHero {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}
export interface MarvelApiData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ApiHero[];
}
export interface MarvelApiResponse {
  code: number;
  status: string;
  data: MarvelApiData;
}

export interface HeroesResultResponse {
  offset: number;
  limit: number;
  total: number;
  results: Hero[];
}
