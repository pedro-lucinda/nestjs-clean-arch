import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class Hero {
  @IsNumber()
  readonly id: number;

  @IsBoolean()
  readonly isFavorite: boolean;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly image: string;

  constructor(
    id: number,
    isFavorite: boolean,
    name: string,
    description: string,
    image: string,
  ) {
    this.id = id;
    this.isFavorite = isFavorite;
    this.name = name;
    this.description = description;
    this.image = image;
  }
}
