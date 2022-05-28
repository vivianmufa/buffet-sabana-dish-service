import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { DishesService } from './dishes.service';
import { Dish } from './entities/dish.entity';

@Crud({
  model: {
    type: Dish,
  },
})

@Controller('dishes')
export class DishesController implements CrudController<Dish>{
  constructor(public service: DishesService) {}
}
