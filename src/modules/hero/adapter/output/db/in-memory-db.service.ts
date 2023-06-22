import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHeroDTO } from 'src/modules/hero/core/domain/dto/create-hero-dto';
import { Hero } from 'src/modules/hero/core/domain/hero.entity';
import { HeroFactory } from 'src/modules/hero/core/domain/hero.factory';

@Injectable()
export class InMemoryDBService {
  private readonly heroes: Hero[] = [];
  constructor(private heroFactory: HeroFactory) {}

  findAll(): Hero[] {
    return this.heroes;
  }

  findOne(id: number): Hero {
    return this.heroes.find((hero) => hero.id === id);
  }

  getIndex(id: number): number {
    const index = this.heroes.findIndex((hero) => hero.id === id);
    if (index === -1) {
      throw new BadRequestException('Hero not found');
    }
    return index;
  }

  async addHero(createHeroDTO: CreateHeroDTO): Promise<Hero> {
    const hero = await this.heroFactory.create(createHeroDTO);
    this.heroes.push(hero);
    return hero;
  }

  update(id: number, updatedHero: Partial<Hero>): Hero {
    const index = this.getIndex(id);
    this.heroes[index] = { ...this.heroes[index], ...updatedHero };
    return this.heroes[index];
  }

  delete(id: number): void {
    const index = this.getIndex(id);
    this.heroes.splice(index, 1);
  }

  async markAsFavorite(id: number): Promise<Hero> {
    const hero = this.findOne(id);

    if (!hero) {
      throw new BadRequestException('Hero not found');
    }

    const updatedHero = await this.addHero({
      ...hero,
      isFavorite: true,
    });

    return this.update(id, { ...updatedHero });
  }

  async unmarkAsFavorite(id: number): Promise<Hero> {
    const hero = this.findOne(id);
    if (!hero) {
      throw new BadRequestException('Hero not found');
    }

    const updatedHero = await this.addHero({
      ...hero,
      isFavorite: false,
    });

    return this.update(id, { ...updatedHero });
  }

  getFavorites(): Hero[] {
    return this.heroes.filter((hero) => hero.isFavorite);
  }
}
