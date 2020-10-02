import { CreateTodoDto } from './dto/create-todo.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';

@Injectable()
export class TodosService {
    todos:Todo[] = [
        {
            id:1,
            title:"Todo App",
            description:"Create our first todo",
            done:false
        },
        {
            id:2,
            title:"Bread",
            description:"Buy bread",
            done:true
        },
        {
            id:3,
            title:"Study NodeJS",
            description:"",
            done:false
        }
    ];

    findAll():Todo[]{
        return this.todos;
    }

    create(todo:CreateTodoDto){
        this.todos = [...this.todos,todo as Todo];
    }

    findOne(id:string){
       return this.todos.find(todo=>todo.id===Number(id))
    }

    update(id:string,todo:Todo){
        const todoToUpdate = this.todos.find(t=>t.id=== +id)
        if (!todoToUpdate){
            return new NotFoundException('Ce todo est inexistant !')
        }

        if(todo.hasOwnProperty('done')){
            todoToUpdate.done = todo.done;
        }

        if (todo.title){
            todoToUpdate.title = todo.title
        }
        if (todo.description){
            todoToUpdate.description = todo.description
        }
        

        const updatedTodos = this.todos.map(t=>t.id !== +id ? t : todoToUpdate)
        this.todos = [...updatedTodos]
        return {updatedTodo:1,todo:todoToUpdate}
    }
}
