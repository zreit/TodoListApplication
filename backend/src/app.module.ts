import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import 'dotenv/config';

const DB_CONNECTION_STRING: string = process.env.DB_CONNECTION_STRING;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(DB_CONNECTION_STRING),
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
