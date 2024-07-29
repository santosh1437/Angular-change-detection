import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private data: string = 'Initial Service Data';

  getData() {
    return this.data;
  }

  setData(newData: string) {
    this.data = newData;
    console.log(`Service Data Updated: ${this.data}`);
  }
}
