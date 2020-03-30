import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { TodoQuery, TodoState, TodoService, Todo, createTodo } from '../state'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  todos$: Observable<TodoState>

  constructor(private todoQuery: TodoQuery, private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.get().subscribe((todos: Todo[]) => {
      this.todoService.set(todos)
    })
    this.todos$ = this.todoQuery.selectAll()
  }
}
