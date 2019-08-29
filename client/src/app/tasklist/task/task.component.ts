import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ActivatedRoute } from '@angular/router'

import { HttpService } from '../../http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  listId: any;
  taskTitle: any;
  tasks: any;
  newTask: FormGroup;
  constructor(private _route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {
    this.getParam();
    this.taskForm();
  }

  taskForm() {
    this.newTask = new FormGroup ({
      text: new FormControl ('', 
      [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  getParam() {
    let observable = this._route.params;
    observable.subscribe(data => {
      this.listId = data.id;
      this.getTasks();
    })
  }

  getTasks() {
    let observable = this._http.getOneList(this.listId);
    observable.subscribe(data => {
      this.tasks = data['task'];
      this.taskTitle = data['title']
      console.log(this.tasks);
    })
  }

  addTask() {
    let observable = this._http.addTask(this.listId, this.newTask.value);
    observable.subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

  checkTask(task_id: string, bool: boolean) {
    let observable = this._http.checkTask(this.listId, {_id: task_id, completed: bool});
    observable.subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }



}
