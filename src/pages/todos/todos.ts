import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TodoModel } from '../../shared/todo-model';
import { AddTaskModalPage } from '../add-task-modal/add-task-modal'
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';

/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public todoService: TodoServiceProvider,
    public modal: ModalController) {
  }

  ionViewDidLoad() {}

  setTodoStyle(item:TodoModel){
    let styles = {
      'text-decoration': item.isDone ? 'line-through' : 'none',
      'font-weight' : item.isImportant ? '600' : 'normal'
    }

    return styles;
  }

  removeTodo(todo: TodoModel){
    this.todoService.removeTodo(todo)
  }

  toogleTodo(todo: TodoModel){
    this.todoService.toogleTodo(todo);
  }
  

  showAddTodo(){
    console.log("hi");
    let modal = this.modal.create(AddTaskModalPage);
    modal.present();

    modal.onDidDismiss(data =>{
      if(data){
        this.todoService.addtodo(data);
      }
    })
  }

  

  
}
