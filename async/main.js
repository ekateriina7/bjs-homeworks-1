'use strict'
let setDailyRhythm = (wakeUpTime, bedTime) => {
    let sayGoodMorning = () => alert('Доброе утро, Вася');
    let sayGoodNight = () => alert('Спокойной ночи, Вася!');
   
    setInterval(setAlarm(wakeUpTime, sayGoodMorning), 1000);
    setInterval(setAlarm(bedTime, sayGoodNight), 1000);
  }
  
  let setAlarm = (time, callback) => {
    return function() {
      let now = new Date;
      let hours = now.getHours();
      let minutes = now.getMinutes();
      if (hours < 10) {
        hours = '0' + hours;
      } else if (minutes < 10) {
        minutes = '0' + minutes
      }
      let nowTime = hours +':'+ minutes;
      if (nowTime === time) {
        callback()
      }
    }
  }
  setDailyRhythm('07:00', '23:00')
  
  