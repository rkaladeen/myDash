import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { TaskRoutingModule } from './tasklist-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


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
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [TaskListComponent]
})
export class TaskModule { }