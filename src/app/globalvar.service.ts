import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  private DataNama : String = "UserCoba";
  constructor() { }

  public getnama() {
    return this.DataNama
  }

  public setnama(nama : string) {
    this.DataNama = nama;
  }

}