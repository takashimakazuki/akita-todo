import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Route, RouterModule } from '@angular/router'
import { ListComponent } from './list/list.component'
import { FormComponent } from './form/form.component'

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
