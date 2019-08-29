import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from '../http.service';


@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})

export class TaskListComponent implements OnInit {
  lists: any;
  newList: FormGroup;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getLists();
    this.listForm();
  }

  listForm () {
    this.newList = new FormGroup ({
      title: new FormControl ('', 
      [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(10)
      ])
    });
  }

  getLists() {
    let observable = this._http.getAllLists();
    observable.subscribe(data => {
      this.lists = data;
      console.log(this.lists);
    })
  }

  addList() {
    let observable = this._http.createList(this.newList.value);
    observable.subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })

  }

  

}
