import { Hero } from 'src/modules/hero/core/domain/hero.entity';
import {
  ApiHero,
  HeroesResultResponse,
  MarvelApiData,
} from '../../../interfaces/hero/api-hero.interface';

export interface IApiHeroFactory {
  fromApiHero(hero: ApiHero): Hero;
  fromApiHeroesData(data: MarvelApiData): HeroesResultResponse;
}
