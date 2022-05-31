import { TodoItem } from './todoitem';
import { Component } from '@angular/core';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Diego", [
    new TodoItem("Ir al super", true),
    new TodoItem("Ir al cine", true),
    new TodoItem("Ir al futbol", true),
    new TodoItem("Ir al banco", false),
  ]
  )

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => item.complete).length;
  }
}
