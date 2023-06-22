import { Module } from '@nestjs/common';
import { HeroesController } from './adapter/input/heroes.controller';
import { HeroesService } from './core/domain/hero.service';
import { GetHeroesUseCase } from './core/use-case/get-hero.use-case';
import { GetFavoriteHeroesUseCase } from './core/use-case/get-favorites.use-case';
import { ToggleFavoriteUseCase } from './core/use-case/toggle-favorite.use-case';
import { InMemoryDBService } from './adapter/output/db/in-memory-db.service';
import { HeroFactory } from './core/domain/hero.factory';
import { ConfigService } from '@nestjs/config';
import { MarvelApiModule } from '../marvel-api/marvel-api.module';

@Module({
  imports: [MarvelApiModule],
  controllers: [HeroesController],
  providers: [
    HeroesService,
    GetHeroesUseCase,
    GetFavoriteHeroesUseCase,
    ToggleFavoriteUseCase,
    InMemoryDBService,
    HeroFactory,
    ConfigService,
  ],
})
export class HeroModule {}
