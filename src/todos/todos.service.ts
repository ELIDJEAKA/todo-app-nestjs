import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    todos = [
        {
            id:1,
            title:"Todo App",
            description:"Create our first todo"
        },
        {
            id:2,
            title:"Bread",
            description:"Buy bread"
        },
        {
            id:3,
            title:"Study NodeJS",
            description:""
        }
    ];

    findAll():any[]{
        return this.todos;
    }
}
