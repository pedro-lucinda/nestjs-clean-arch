import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { HeroesService } from '../../core/domain/hero.service';
import { SearchHeroesDto } from '../../core/domain/dto/search-heroes.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  async getHeroes(@Query() searchHeroesDto: SearchHeroesDto) {
    try {
      const { name } = searchHeroesDto;
      return this.heroesService.getHeroes(name);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  @Get('favorite')
  async toggleFavorite(@Query('id') id: string) {
    try {
      return this.heroesService.toggleFavorite(+id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  @Get('favorites')
  async getFavorites() {
    try {
      return this.heroesService.getFavorites();
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
