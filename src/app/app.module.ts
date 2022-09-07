import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { WorkComponent } from './work/work.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { BotonlogautComponent } from './botonlogaut/botonlogaut.component';
import { MainComponent } from './main/main.component';
import { AcercademiComponent } from './acercademi/acercademi.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    WorkComponent,
    ProyectosComponent,
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    NavbardashboardComponent,
    BotonlogautComponent,
    MainComponent,
    AcercademiComponent,
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
