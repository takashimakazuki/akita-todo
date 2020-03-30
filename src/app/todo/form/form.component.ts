import { Component, OnInit } from '@angular/core'
import { Todo, createTodo, TodoService } from '../state'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  form: FormGroup
  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(createTodo({}))
  }

  create() {
    this.todoService
      .add(createTodo(this.form.value))
      .subscribe((todo: Todo) => {
        console.log(todo)
        this.router.navigate(['/todo'])
      })
  }
}
