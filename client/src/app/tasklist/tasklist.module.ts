import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TaskRoutingModule } from './tasklist-routing.module';

import { HttpService } from '../http.service'

import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './tasklist.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    TaskRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [TaskListComponent]
})
export class TaskModule { }