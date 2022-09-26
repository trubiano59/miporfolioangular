import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes=[
  {path: '', component:IndexComponent},
  {path: 'dashboard', component:DashboardComponent}, /*estos son arrays de datos*/
  {path:'**', component:ErrorComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
