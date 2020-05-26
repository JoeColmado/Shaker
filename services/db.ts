import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import{Observable} from 'rxjs'
import { retry } from "rxjs/operators";


export class DB {
  testData={
    action: 'getPrograms',
    subdata:{
      id: 2,
      attribute: 'name',
      value: 'Nagel'
    }
  }
  constructor(private http: HttpClient) {
    // this.makeServerRequest(this.testData)
  }

  getAllPrograms(){
    let data ={
      action: 'getPrograms',
      subdata:{

      }
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
    const SERVER_URL = "http://192.168.43.60:8080/db";
    let params = new HttpParams()
      .set('reqData',JSON.stringify(data))
    return this.http.get<any[]>(SERVER_URL,{params})
      // .subscribe((data:any)=> console.log(data))
  }

}
