import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes), MatTableModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
