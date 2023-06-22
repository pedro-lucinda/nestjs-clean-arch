import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '../../adapter/output/db/in-memory-db.service';
import { Hero } from '../domain/hero.entity';
import { MarvelApiService } from 'src/modules/marvel-api/core/domain/marvel-api.service';

@Injectable()
export class ToggleFavoriteUseCase {
  constructor(
    private readonly inMemoryDbService: InMemoryDBService,
    readonly marvelApiService: MarvelApiService,
  ) {}

  async execute(heroId: number): Promise<Hero> {
    const hero = this.inMemoryDbService.findOne(heroId);

    if (!hero) {
      const heroData = await this.marvelApiService.getHeroById(heroId);

      return await this.inMemoryDbService.addHero({
        ...heroData,
        isFavorite: true,
      });
    }

    return this.inMemoryDbService.update(hero.id, {
      isFavorite: !hero.isFavorite,
    });
  }
}
