import { IsNotEmpty, IsString } from 'class-validator';

export class SearchHeroesDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
