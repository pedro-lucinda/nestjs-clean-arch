import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '../../adapter/output/db/in-memory-db.service';
import { Hero } from '../domain/hero.entity';
import { MarvelApiService } from 'src/modules/marvel-api/core/domain/marvel-api.service';

@Injectable()
export class GetHeroesUseCase {
  constructor(
    private readonly marvelApiAdapter: MarvelApiService,
    private readonly inMemoryDbService: InMemoryDBService,
  ) {}

  async execute(name: string): Promise<Hero[]> {
    const heroesFromApi = await this.marvelApiAdapter.searchHeroesByName(name);

    return heroesFromApi.results.map((heroFromApi) => {
      const heroInDb = this.inMemoryDbService.findOne(heroFromApi.id);
      const isFavorite = heroInDb ? heroInDb.isFavorite : false;

      return {
        ...heroFromApi,
        isFavorite,
      };
    });
  }
}
