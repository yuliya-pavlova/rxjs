import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FocusWithinModule } from "./focus-within/focus-within.module";
import { Task1Component } from './components/task1/task1.component';
import { Task5Component } from './components/task5/task5.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Task4Component } from './components/task4/task4.component';
import { LoadingService } from './services/loading.service';

const appRoutes: Routes =[
  { path: '', component: HomePageComponent},
  { path: 'task1', component: Task1Component},
  { path: 'task4', component: Task4Component},
  { path: 'task5', component: Task5Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task5Component,
    HomePageComponent,
    Task4Component,
  ],
  imports: [
    BrowserModule,
    FocusWithinModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
