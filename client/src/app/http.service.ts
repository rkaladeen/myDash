import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAllTasks() {
    return this._http.get("/reminder");
  }

  getOneTask(task_id: string) {
    return this._http.get(`/reminder/${task_id}`);
  }

  createTask(newTask: object) {
    return this._http.post("/reminder", newTask);
  }

  updateTask(updateTask: object) {
    return this._http.put(`/reminder/${updateTask['_id']}`, updateTask);
  }

  deleteTask(deleteTask: string) {
    return this._http.delete(`/reminder/${deleteTask}`);
  }

}
