class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }


  addClock(timeAlarm, callback) {
    if (!timeAlarm || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    } 

    if(this.alarmCollection.some( item => item.time === timeAlarm)){
      console.warn('Уже присутствует звонок на это же время');
    }
    
    let clock = {
      time: timeAlarm,
      callback: callback,
      canCall: true
    }
            
    this.alarmCollection.push(clock);
  }

  removeClock(timeDelete) {
    this.alarmCollection = this.alarmCollection.filter(item => { 
      return item.time !== timeDelete;
    })
  }

  getCurrentFormattedTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    // return currentDate.getHours() + ':' + currentDate.getMinutes();
    return hours + ':' + minutes;
  }

  start() {
    if(this.intervalId) {
      return;
    }

    this.intervalId = setInterval (() => {
      this.alarmCollection.forEach(item => {
        if(item.time === this.getCurrentFormattedTime() && item.canCall){
          item.canCall = false;
          item.callback();
        }
      })
    } , 1000);
  }

  stop() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach(item => item.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
