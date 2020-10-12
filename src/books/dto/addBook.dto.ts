import { ApiProperty } from '@nestjs/swagger';

export class AddBookDto {
  @ApiProperty()
  readonly _id: string;  
  @ApiProperty()
  readonly author: string;
  @ApiProperty()
  readonly country: string;
  @ApiProperty()
  readonly imageLink: string;
  @ApiProperty()
  readonly language: string;
  @ApiProperty()
  readonly link: string;
  @ApiProperty()
  readonly pages: number;
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly year: number;
}