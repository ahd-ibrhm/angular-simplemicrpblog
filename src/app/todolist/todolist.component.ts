import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos:Todo[];

  charLimit: number=280;
  values = '';

  inputTodo:string = "";
  constructor() {
    this.todos=[
      {
        content:"message1"
      },
      {
        content:"mssage2"
      }

    ]

  }

  ngOnInit(): void {

  }

  addTodo () {

    this.todos.push({
      content: this.inputTodo
    });

    this.inputTodo = "";
  }

  removeTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }


}



