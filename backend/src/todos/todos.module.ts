import { MongooseModule } from '@nestjs/mongoose';
import { ToDos, ToDosSchema } from './schemas/todos.schema';
import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ToDos.name, schema: ToDosSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
