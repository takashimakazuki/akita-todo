import { NgModule } from '@angular/core'
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
    path: 'create',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
