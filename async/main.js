'use strict'
let setDailyRhythm = (wakeUpTime, bedTime) => {
    let sayGoodMorning = () => alert('Доброе утро, Вася');
    let sayGoodNight = () => alert('Спокойной ночи, Вася!')
   
    setInterval(setAlarm(wakeUpTime, sayGoodMorning), 1000);
    setInterval(setAlarm(bedTime, sayGoodNight), 1000);
    
  
  }
  
  let setAlarm = (time, callback) => {
    return function() {
      let now = new Date;
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let nowTime = hours +':'+ minutes;
      if (nowTime === time) {
        callback()
      }
    }
  }
  setDailyRhythm('14:23', '14:24')
  