import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';


@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})

export class TaskListComponent implements OnInit {
  lists: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    let observable = this._http.getAllTasks();
    observable.subscribe(data => {
      this.lists = data;
      console.log(this.lists);
    })
  }

  

}
