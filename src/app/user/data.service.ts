import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private fname: string = '';

  constructor() { }
  setFname(fname: string) {
    this.fname = fname;
  }

  getFname(): string {
    return this.fname;
  }
}
