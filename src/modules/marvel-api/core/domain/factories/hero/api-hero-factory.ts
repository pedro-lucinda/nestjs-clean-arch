import { Hero } from 'src/modules/hero/core/domain/hero.entity';
import { IApiHeroFactory } from './interfaces/api-hero-factory.interface';
import {
  ApiHero,
  HeroesResultResponse,
  MarvelApiData,
} from '../../interfaces/hero/api-hero.interface';
export class ApiHeroFactory implements IApiHeroFactory {
  fromApiHero(apiHero: ApiHero): Hero {
    const thumbnail = apiHero.thumbnail;

    return {
      id: apiHero.id,
      name: apiHero.name,
      description: apiHero.description,
      image: `${thumbnail.path}.${thumbnail.extension}`,
      isFavorite: false,
    };
  }

  fromApiHeroesData(data: MarvelApiData): HeroesResultResponse {
    if (!data?.results || !data?.results.length) {
      return {
        offset: 0,
        limit: 0,
        total: 0,
        results: [],
      };
    }

    const results = data.results.map((hero) => this.fromApiHero(hero));

    return {
      offset: data.offset,
      limit: data.limit,
      total: data.total,
      results,
    };
  }
}
