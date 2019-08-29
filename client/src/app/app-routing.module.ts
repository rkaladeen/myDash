import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './tasklist/task/task.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GoalsComponent } from './goals/goals.component';
import { FinanceComponent } from './finance/finance.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },

  { 
    path: "reminders", 
    component: TaskListComponent, 
    children: [
      { path: ":id", component: TaskComponent } 
    ]
  },

  { path: "schedule", component: ScheduleComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'news', component: NewsComponent },
  { path: "weather", component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
