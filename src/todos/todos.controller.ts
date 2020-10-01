import { TodosService } from './todos.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller,Get, Post, Body, Param } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';


//localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService:TodosService){}
    
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.todosService.findOne(id)
    }


    @Get()
    findAll():Todo[]{
        return this.todosService.findAll()
    }

    @Post()
    createTodo(@Body() newTodo){
        console.log('newTodo : ', newTodo);
        this.todosService.create(newTodo);
    }


}
