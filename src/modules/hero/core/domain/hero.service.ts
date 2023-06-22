import { Injectable } from '@nestjs/common';
import { GetHeroesUseCase } from '../use-case/get-hero.use-case';
import { ToggleFavoriteUseCase } from '../use-case/toggle-favorite.use-case';
import { GetFavoriteHeroesUseCase } from '../use-case/get-favorites.use-case';

@Injectable()
export class HeroesService {
  constructor(
    private readonly getHeroesUseCase: GetHeroesUseCase,
    private readonly toggleFavoriteUseCase: ToggleFavoriteUseCase,
    private readonly getFavoritesUseCase: GetFavoriteHeroesUseCase,
  ) {}

  async getHeroes(name: string) {
    return this.getHeroesUseCase.execute(name);
  }

  async toggleFavorite(heroId: number) {
    return this.toggleFavoriteUseCase.execute(heroId);
  }

  async getFavorites() {
    return this.getFavoritesUseCase.execute();
  }
}
