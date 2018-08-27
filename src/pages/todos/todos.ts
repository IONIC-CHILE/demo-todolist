import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoModel } from '../../shared/todo-model';

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

  public todos: TodoModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.todos= [
     new TodoModel("Esto es un elemento"),
     new TodoModel("Esto es un elemento"),
     new TodoModel("Esto es un elemento"),
     new TodoModel("Esto es un elemento", true),
     new TodoModel("Esto es un elemento", true, true),
    ]
  }

}
