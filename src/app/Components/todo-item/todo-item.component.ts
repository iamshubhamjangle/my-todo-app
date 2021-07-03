import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input()
  passed_todo!: Todo;

  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDoneClick(){
    console.log("Done clicked");
  }
  
  onDeleteClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Delete clicked");
  }

}
