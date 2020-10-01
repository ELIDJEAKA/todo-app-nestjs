import { TodosService } from './todos.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller,Get } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';


//localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService:TodosService){}
    @Get()
    findAll():Todo[]{
        return this.todosService.findAll()
    }
}
