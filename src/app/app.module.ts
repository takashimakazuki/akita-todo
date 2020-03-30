import { BrowserModule } from '@angular/platform-browser'
import { NgModule, InjectionToken } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service'
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store'
import { environment } from '../environments/environment'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Environment } from 'src/environments/environment.prod'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    FormsModule,
    NgbModule,
  ],
  providers: [
    {
      // providing environment variables via DI
      // https://codeburst.io/angular-dependency-injection-tips-ddb24b8244be
      provide: Environment,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
