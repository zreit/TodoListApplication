import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  readonly todo: string;

  @ApiProperty()
  readonly priority: number;
}
