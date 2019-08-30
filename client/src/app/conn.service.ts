import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnService {

  constructor() { }

  //Connection between List and Tasks
  updateList(func) {
    return func;
  }

}
