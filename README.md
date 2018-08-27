# Clase 28 Arreglos
```
export class TodosPage {

  public todos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.todos= [
      {
        description: "Esto es una tarea",
        isDone: true
      },
      {
        description: "Esto es una tarea",
        isDone: false
      }
    ]
  }

}
```

```
<ion-content padding>
  <ion-list>
      <ion-item *ngFor="let todo of todos">
        {{todo.description}}
      </ion-item>
  </ion-list>
</ion-content>
```
