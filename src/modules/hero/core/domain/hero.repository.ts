import { Hero } from './hero.entity';

export interface HeroRepository {
  findAll(): Hero[];
  findOne(id: number): Hero;
  create(hero: Hero): Hero;
  update(id: number, updatedHero: Partial<Hero>): Hero;
  delete(id: number): void;
  markAsFavorite(id: number): Hero;
  unmarkAsFavorite(id: number): Hero;
  getFavorites(): Hero[];
}
