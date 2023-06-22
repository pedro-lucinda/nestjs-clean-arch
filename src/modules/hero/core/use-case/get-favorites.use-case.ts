import { Injectable } from '@nestjs/common';

import { InMemoryDBService } from '../../adapter/output/db/in-memory-db.service';
import { Hero } from '../domain/hero.entity';
import { MarvelApiService } from 'src/modules/marvel-api/core/domain/marvel-api.service';

@Injectable()
export class GetFavoriteHeroesUseCase {
  constructor(
    private readonly marvelApiService: MarvelApiService,
    private readonly inMemoryDbService: InMemoryDBService,
  ) {}

  async execute(): Promise<Hero[]> {
    return this.inMemoryDbService.getFavorites();
  }
}
