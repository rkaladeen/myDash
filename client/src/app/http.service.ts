import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  //List Routes
  getAllLists() {
    return this._http.get("/reminder");
  }
  getOneList(list_id: string) {
    return this._http.get(`/reminder/${list_id}`);
  }
  createList(newList: object) {
    return this._http.post("/reminder", newList);
  }
  updateList(updateList: object) {
    return this._http.put(`/reminder/${updateList['_id']}`, updateList);
  }
  deleteList(list_id: string) {
    return this._http.delete(`/reminder/${list_id}`);
  }

  //Task Routes
  addTask(list_id:string, newTask: object) {
    return this._http.put(`/reminder/${list_id}/add`, newTask);
  }
  updateTask(list_id:string, taskUpdate: object) {
    return this._http.put(`/reminder/${list_id}/update`, taskUpdate);
  }
  deleteTask(list_id:string, task_id:string) {
    return this._http.put(`/reminder/${list_id}/add`, { _id: task_id });
  }
  checkTask(list_id:string, taskUpdate: object) {
    return this._http.put(`/reminder/${list_id}/check`, taskUpdate);
  }
  getTask(list_id:string, task_id:string) {
    return this._http.put(`/reminder/${list_id}/find`, { _id: task_id });
  }

}
