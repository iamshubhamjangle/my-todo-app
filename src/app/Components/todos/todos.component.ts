import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos!: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos") || "";
    if(this.localItem.length == 0){
      this.todos = []
    } else {
      this.todos = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }

  deleteFunction(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);    

    // save to local storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addFunction(todo: Todo): void {
    this.todos.push(todo);

    // save to local storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
