import { validateOrReject } from 'class-validator';
import { CreateHeroDTO } from './dto/create-hero-dto';
import { Hero } from './hero.entity';

export class HeroFactory {
  async create(createHeroDTO: CreateHeroDTO): Promise<Hero> {
    await validateOrReject(createHeroDTO);

    const { id, isFavorite, name, description, image } = createHeroDTO;

    return new Hero(id, isFavorite, name, description, image);
  }
}
