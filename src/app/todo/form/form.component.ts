import { Component, OnInit } from '@angular/core'
import { createTodo, TodoService, Todo } from '../state'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Location } from '@angular/common'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  form: FormGroup
  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          const id = params.get('id')
          // 下のコードではURL直打ちされたときにStoreにtodoがないので表示されない
          // return id ? this.todoQuery.selectEntity(id) : of({})
          return id ? this.todoService.getTodo(id) : of({})
        })
      )
      .subscribe((todo: Todo) => (this.form = this.fb.group(createTodo(todo))))
  }

  submit(): void {
    const todoID: string = this.route.snapshot.paramMap.get('id')
    if (todoID) {
      this.update(parseInt(todoID, 10))
    } else {
      this.create()
    }
  }

  create(): void {
    this.todoService
      .postTodo(this.form.value)
      .subscribe(() => this.router.navigate(['todo']))
  }

  update(id: number): void {
    this.todoService
      .putTodo(id, this.form.value)
      .subscribe(() => this.router.navigate(['todo']))
  }

  remove(id: number): void {
    this.todoService.deleteTodo(id).subscribe()
  }

  back(): void {
    this.location.back()
  }
}
