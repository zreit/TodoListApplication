import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ToDos, ToDosDocument } from './schemas/todos.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(ToDos.name) private toDosModel: Model<ToDosDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<ToDos> {
    const createdToDo = new this.toDosModel(createTodoDto);
    return createdToDo.save();
  }

  async findAll(): Promise<ToDos[]> {
    return this.toDosModel.find().exec();
  }

  async findOne(name: string): Promise<ToDos> {
    return this.toDosModel.findOne({ todo: name }).exec();
  }

  async update(name: string, updateTodoDto: UpdateTodoDto): Promise<ToDos> {
    const updatedToDo = await this.toDosModel
      .findOneAndUpdate({ todo: name }, updateTodoDto, { new: false })
      .exec();
    return updatedToDo.save();
  }

  async remove(name: string) {
    const deletedToDo = await this.toDosModel.deleteOne({ todo: name }).exec();
    return deletedToDo;
  }
}
