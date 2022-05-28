import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishesService extends TypeOrmCrudService<Dish>{
  constructor(@InjectRepository(Dish) repo) {
    super(repo)
  }
}
