import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title 1",
        desc: "This is the desc 1",
        active: false
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "This is the desc 21",
        active: false
      },
      {
        sno: 3,
        title: "This is title 3",
        desc: "This is the desc 333",
        active: false
      },
    ]
  }

  ngOnInit(): void {
  }

  deleteFunction(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);    
  }

}
