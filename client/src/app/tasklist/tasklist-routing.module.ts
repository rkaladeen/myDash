import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './tasklist.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { 
    path: "reminders", 
    component: TaskListComponent, 
    children: [
      { path: ":id", component: TaskComponent }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }