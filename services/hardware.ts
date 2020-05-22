import { SPI } from "pi-spi";
import {Gpio} from 'onoff/onoff';

export class Hardware {
  initHardware(){
    console.log('init');
    try {
      // console.log(Gpio);

    } catch (error) {
      console.log(error);
    }

  }

}
