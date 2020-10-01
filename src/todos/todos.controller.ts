import { TodosService } from './todos.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller,Get } from '@nestjs/common';


//localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService:TodosService){}
    @Get()
    findAll():any[]{
        return this.todosService.findAll()
    }
}
