import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InschrijvenComponent } from './inschrijven/inschrijven.component';
import { schoolResolver } from './resolvers/school-resolver';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    component: InschrijvenComponent,
    resolve: { school: schoolResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
