import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './list/list.component'
import { FormComponent } from './form/form.component'
import { TodoRoutingModule } from './todo-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { TodoService } from './state'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
})
export class TodoModule {}
