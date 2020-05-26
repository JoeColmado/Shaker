export class Timer {
  parentObject;

  constructor(parentObject){
    this.parentObject = parentObject;
    this.parentObject();
  }

  // Timer
    interval ;
    timerActive: boolean;
    timeLeftString:string ="";
    timeLeft: number;

    setTimeLeft(time: number){
      this.timeLeft = time;
      this.createTimeLeftString()
    }

    startTimer() {
      this.timerActive = true;
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
          this.createTimeLeftString()
        } else {
          // this.onProgramFinish()
        }
      },1000)
    }
    pauseTimer() {
      clearInterval(this.interval)
      this.timerActive = false;
      // this.timeLeftString= '';
    }
    stopTimer() {
      clearInterval(this.interval)
      this.timerActive = false;
      this.timeLeft = 0;
      this.createTimeLeftString()
    }
    decreaseLeftTime(){
      if (this.timeLeft > 60) {
        this.timeLeft -= 60;
        this.createTimeLeftString();
      }
    }
    increaseLeftTime(){
      this.timeLeft -=  -60 ;
      this.createTimeLeftString();
    }
    createTimeLeftString(){
      let leftMin = this.twoDigitTransform(Math.floor(this.timeLeft / 60));
      let leftSec = this.twoDigitTransform(Math.floor(this.timeLeft % 60));
      let timeString: string;
      timeString = leftMin+ ' min : ' + leftSec + ' s';
      this.timeLeftString = timeString;
    }
    twoDigitTransform(n: number ){
        let input : number = n;
        return n > 9 ? "" + input: "0" + input;
    }
}
