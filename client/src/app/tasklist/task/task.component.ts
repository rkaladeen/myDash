import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { HttpService } from '../../http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  listId: any;
  tasks: any;
  constructor(private _route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {
    this.getParam();
    this.getTasks();
  }

  getParam() {
    let observable = this._route.params;
    observable.subscribe(data => {
      this.listId = data.id;
    })
  }

  getTasks() {
    let observable = this._http.getOneTask(this.listId);
    observable.subscribe(data => {
      this.tasks = data['task'];
      console.log(this.tasks);
    })
  }

}
