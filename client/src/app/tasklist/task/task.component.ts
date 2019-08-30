import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'
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
  editTask: FormGroup
  @Output() updateList: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private _route: ActivatedRoute, 
    private _http: HttpService, 
    private _router: Router
  ) { }
  
  ngOnInit() {
    this.getParam();
    this.taskForm();
    this.editForm();
  }

  taskForm() {
    this.newTask = new FormGroup ({
      text: new FormControl ('', 
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    })
  }

  editForm() {
    this.editTask = new FormGroup ({
           _id: new FormControl(''),
          text: new FormControl(''),
           due: new FormControl(''),
      priority: new FormControl(''),
    })
  }

  fillForm(task_id) {
    let observable = this._http.getTask(this.listId, task_id);
    observable.subscribe(data => {
      console.log(data[0].task[0]);
      this.editTask.setValue({
        _id: data[0].task[0]._id,
        text: data[0].task[0].text,
        due: data[0].task[0].due,
        priority: data[0].task[0].priority
      })
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
      // console.log(this.tasks);
    })
  }

  addTask() {
    let observable = this._http.addTask(this.listId, this.newTask.value);
    observable.subscribe(data => {
      this.updateList.emit(data);
      this.ngOnInit();
      // console.log(data);
    })
  }

  checkTask(task_id: string, bool: boolean) {
    let observable = this._http.checkTask(this.listId, {_id: task_id, completed: bool});
    observable.subscribe(data => {
      this.ngOnInit();
      // console.log(data);
    })
  }

  updateTask() {
    console.log(this.editTask.value);
    let observable = this._http.updateTask(this.listId, this.editTask.value);
    observable.subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

  deleteList() {
    let observable = this._http.deleteList(this.listId);
    observable.subscribe(data => {
      this._router.navigate(['/reminders'])
      this.updateList.emit(data);
      // console.log(data);
    })
  }

  deleteTask(task_id: string) {
    let observable = this._http.deleteTask(this.listId, task_id);
    observable.subscribe(data => {
      this.ngOnInit();
      // console.log(data);
    })
  }

}
