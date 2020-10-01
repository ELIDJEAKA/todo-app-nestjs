import { Injectable } from '@nestjs/common';
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
}
