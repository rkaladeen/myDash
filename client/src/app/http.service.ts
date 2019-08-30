import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

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

  addTask(list_id:string, newTask: object) {
    return this._http.put(`/reminder/${list_id}/add`, newTask);
  }

  deleteTask(list_id:string, task_id:string) {
    return this._http.put(`/reminder/${list_id}/add`, list_id);
  }

  checkTask(list_id:string, taskUpdate: object) {
    return this._http.put(`/reminder/${list_id}/check`, taskUpdate);
  }

}
