import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import{Observable} from 'rxjs'
import { retry } from "rxjs/operators";
import {SERVER_URL} from './config'

export class Hardware {
  constructor(private http: HttpClient){
  }
  initHardware(){
    //var LED = new Gpio(4,'out');
    // this.makeServerRequest()
  }
  switchDeviceOn(){
    const data= {
      action: 'switchDeviceOn',
    }
    this.makeServerRequest(data);
  }

  switchDeviceOff(){
    const data= {
      action: 'switchDeviceOff',
    }
    this.makeServerRequest(data);
  }
  calibrateFrequency(newFrequency: number){
    const yCalib = 13.8874989061189;
    const xCalib = -27.9423716173107;
    let calibratedFrequency = yCalib * newFrequency + xCalib;
    calibratedFrequency = Math.round(calibratedFrequency);
    if (calibratedFrequency < 0) {
      calibratedFrequency = 0;
    }
    if (calibratedFrequency > 255) {
      calibratedFrequency = 255;
    }
    return calibratedFrequency;
  }

  setDeviceFrequency(newFrequency: number){
    let calibratedFrequency = this.calibrateFrequency(newFrequency);

    const data= {
      action: 'setDeviceFrequency',
      newFrequency: calibratedFrequency,
    }

    this.makeServerRequest(data);
  }

  makeServerRequest(data){
    let url  = SERVER_URL + "/hardware";
    let params = new HttpParams()
      .set('reqData',JSON.stringify(data))
    this.http.get<any[]>(url,{params})
      .subscribe(
        (data:any)=> {
          console.log(data)
        },
        (error) =>{
          window.alert('No Hardware found')

        }
      )
  }
}
