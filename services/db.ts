import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import{Observable} from 'rxjs'
import { retry } from "rxjs/operators";
import {SERVER_URL} from './config'


export class DB {
  constructor(
    private http: HttpClient,
    ) {

    // this.makeServerRequest(this.testData)
  }

  getAllPrograms(){
    let data ={
      action: 'getPrograms',
    }
    return this.makeServerRequest(data);
  }
  insertNewProgram(newProgram){
    let data ={
      action: 'insertNewProgram',
      subdata: newProgram,
    }
    return this.makeServerRequest(data);
  }
  modifyAttr(modifyData){
    let data ={
      action: 'modifyAttr',
      subdata: modifyData,
    }
    return this.makeServerRequest(data);
  }

  deleteProgram(deleteData){
    let data ={
      action: 'deleteProgram',
      subdata: deleteData,
    }
    return this.makeServerRequest(data);

  }

  makeServerRequest(data){
    let url = SERVER_URL + "/db";
    let params = new HttpParams()
      .set('reqData',JSON.stringify(data))
    return this.http.get<any[]>(url,{params})
      // .subscribe((data:any)=> console.log(data))
  }

}
