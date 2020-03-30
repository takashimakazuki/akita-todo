import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { TodoQuery, TodoState, TodoService, Todo, createTodo } from '../state'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  todos$: Observable<TodoState> = this.todoQuery.selectAll()

  constructor(private todoQuery: TodoQuery, private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos() {
    this.todoService.getTodos().subscribe()
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe()
  }
}
