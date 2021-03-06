import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewComponent } from './pages/new/new.component';
import { ServiceComponent } from './pages/service/service.component';
import { QuestionComponent } from './pages/question/question.component';
import { LoginComponent } from './pages/login/login.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { PhotodetailComponent } from './components/photodetail/photodetail.component';

//service



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NewComponent,
    ServiceComponent,
    QuestionComponent,
    LoginComponent,
    KanbanComponent,
    TodolistComponent,
    PhotodetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
