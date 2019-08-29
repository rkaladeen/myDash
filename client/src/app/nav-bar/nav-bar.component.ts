import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../app.component.css']
})
export class NavBarComponent implements OnInit {
  links: any = [
    { 0: { route: "/reminders", fa_icon: "fas fa-tasks", label: "reminders" } },
    { 1: { route: "/schedule", fa_icon: "fas fa-tasks", label: "schedule" } },
    { 2: { route: "/goals", fa_icon: "fas fa-tasks", label: "goals" } },
    { 3: { route: "/finance", fa_icon: "fas fa-tasks", label: "finance" } },
    { 4: { route: "/news", fa_icon: "fas fa-tasks", label: "news" } },
    { 5: { route: "/weather", fa_icon: "fas fa-tasks", label: "weather" } }
  ]
  constructor() { }

  ngOnInit() {
  }

}
