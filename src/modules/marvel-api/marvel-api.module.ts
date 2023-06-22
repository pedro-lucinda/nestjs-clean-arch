import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MarvelApiService } from './core/domain/marvel-api.service';
import { ApiHeroFactory } from './core/domain/factories/hero/api-hero-factory';
import { HttpModule } from '@nestjs/axios';
import { MarvelApiAuthProvider } from './core/domain/providers/auth-provider';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [
    MarvelApiService,
    ConfigService,
    ApiHeroFactory,
    MarvelApiAuthProvider,
  ],
  exports: [MarvelApiService],
})
export class MarvelApiModule {}
