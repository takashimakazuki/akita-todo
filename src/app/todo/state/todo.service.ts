import { Injectable } from '@angular/core'
import { TodoStore } from './todo.store'
import { Todo } from './todo.model'
import { HttpClient } from '@angular/common/http'
import { Environment } from 'src/environments/environment.prod'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class TodoService {
  baseURL: string = `${this.env.backendURL}/todo/`

  constructor(
    protected store: TodoStore,
    private http: HttpClient,
    private env: Environment
  ) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(`${this.baseURL}`)
      .pipe(tap((todos: Todo[]) => this.store.set(todos)))
  }

  getTodo(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(`${this.baseURL}${id}`)
      .pipe(tap((todo: Todo) => this.store.update(id, () => todo)))
  }

  postTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(`${this.baseURL}`, todo)
      .pipe(tap((todo: Todo) => this.store.add(todo, { prepend: true })))
  }

  putTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(`${this.baseURL}${id}`, todo)
      .pipe(tap((todo: Todo) => this.store.update(id, todo)))
  }

  deleteTodo(id: number): Observable<Object> {
    // TODO: determine Generics Type
    return this.http
      .delete<Object>(`${this.baseURL}/todo/${id}/`)
      .pipe(tap(() => this.store.remove(id)))
  }
}
