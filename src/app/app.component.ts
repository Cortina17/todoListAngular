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
    new TodoItem("Ir al super"),
    new TodoItem("Ir al cine", true),
    new TodoItem("Ir al futbol"),
    new TodoItem("Ir al banco"),
  ]);

  showComplete = false;

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
}
