import { Module } from '@nestjs/common';
import { HeroModule } from './modules/hero/hero.module';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';

dotenv.config();

@Module({
  imports: [ConfigModule.forRoot(), HeroModule],
})
export class AppModule {}
