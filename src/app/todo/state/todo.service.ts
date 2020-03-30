import { Injectable } from '@angular/core'
import { TodoStore, TodoState } from './todo.store'
import { NgEntityService } from '@datorama/akita-ng-entity-service'
import { Todo } from './todo.model'

@Injectable({ providedIn: 'root' })
export class TodoService extends NgEntityService<TodoState> {
  constructor(protected store: TodoStore) {
    super(store)
  }

  set(todos: Todo[]) {
    this.store.set(todos)
  }

  postTodo(todo) {
    this.store.add(todo, { prepend: true })
  }
}
