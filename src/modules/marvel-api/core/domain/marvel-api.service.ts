import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ApiHeroFactory } from './factories/hero/api-hero-factory';
import { MarvelApiAuthProvider } from './providers/auth-provider';
import {
  HeroesResultResponse,
  MarvelApiResponse,
} from './interfaces/hero/api-hero.interface';

@Injectable()
export class MarvelApiService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
    private apiHeroFactory: ApiHeroFactory,
    private authProvider: MarvelApiAuthProvider,
  ) {}

  private readonly baseUrl = this.configService.get<string>('MARVEL_API_URL');

  async searchHeroesByName(name: string): Promise<HeroesResultResponse> {
    try {
      const authParams = this.authProvider.getAuthParams();

      const response = await this.httpService.axiosRef.get<MarvelApiResponse>(
        `${this.baseUrl}/v1/public/characters`,
        {
          params: {
            ...authParams,
            nameStartsWith: name,
            limit: 20,
          },
        },
      );

      return this.apiHeroFactory.fromApiHeroesData(response.data.data);
    } catch (error) {
      throw new InternalServerErrorException("Couldn't fetch heroes from API");
    }
  }

  async getHeroById(id: number) {
    try {
      const authParams = this.authProvider.getAuthParams();
      const response = await this.httpService.axiosRef.get<MarvelApiResponse>(
        `${this.baseUrl}/v1/public/characters/${id}`,
        {
          params: {
            ...authParams,
          },
        },
      );

      const hero = response.data.data.results[0];
      return this.apiHeroFactory.fromApiHero(hero);
    } catch (error) {
      throw new InternalServerErrorException(
        "Couldn't fetch the hero from API",
      );
    }
  }
}
