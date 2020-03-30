import { NgModule } from '@angular/core'
import { RouterModule, Route } from '@angular/router'
import { NomalComponent } from './nomal/nomal.component'

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: NomalComponent,
  },
]

@NgModule({
  declarations: [NomalComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopRoutingModule {}
