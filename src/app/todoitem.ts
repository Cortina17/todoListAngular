export class TodoItem {
  task: string;
  complete: boolean;
  //falso son los realizados, verdadero son tareas pendientes

  constructor(taskVal: string, completeVal: boolean = false) {
    this.task = taskVal;
    this.complete = completeVal;
  }
}
