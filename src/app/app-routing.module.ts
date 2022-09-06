import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes=[
  {path: "dashboard",component:DashboardComponent},
  {path:'',redirectTo:'/', pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
