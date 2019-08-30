import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  links: any = [
   { 0: { route: "/dashboard", fa_icon: "fas fa-th", label: "dashboard" } },
   { 1: { route: "/reminders", fa_icon: "fas fa-tasks", label: "reminders" } },
   { 2: { route: "/schedule", fa_icon: "far fa-calendar-alt", label: "schedule" } },
   { 3: { route: "/goals", fa_icon: "fas fa-bullseye", label: "goals" } },
   { 4: { route: "/finance", fa_icon: "fas fa-hand-holding-usd", label: "finance" } },
   { 5: { route: "/news", fa_icon: "fas fa-newspaper", label: "news" } },
   { 6: { route: "/weather", fa_icon: "fas fa-cloud-sun-rain", label: "weather" } }
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
