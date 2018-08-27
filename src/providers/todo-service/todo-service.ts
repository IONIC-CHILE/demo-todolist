import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { TodoModel } from '../../shared/todo-model'

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {

  private todos: TodoModel[];

  constructor(public http: Http) {
    this.getTodos();
  }

  getTodos(){
      this.todos= [
      new TodoModel("Esto es un elemento"),
      new TodoModel("Esto es un elemento"),
      new TodoModel("Esto es un elemento"),
      new TodoModel("Esto es un elemento", true),
      new TodoModel("Esto es un elemento", true, true),
     ]
  }


  toogleTodo(item: TodoModel){
    item.isDone = ! item.isDone;
  }

  addtodo(todo:TodoModel){
    this.todos.push(todo);
  }

  removeTodo(todo: TodoModel){
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index+1)
    ]
  }

 

}
