//task1
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = +new Date();
    let b_day = +new Date(birthday);
    let diff = now - b_day;
    let age = diff/31536000000
    return age > 18
    }
    checkBirthday('2000-12-03')
    
//task2
function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    let sound = animal.sound;
    if (animal = undefined) {
    	return null;
    } else {
    	return sound;
    }
}

//task3
function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    function getAverageMark(marks) {
        let total = 0;
        for (i = 0; i < marks.length; i++) {
          total += marks[i];
      }
      let roundedAverage = Math.round(total / marks.length);
      return roundedAverage;
    
    }
      getAverageMark([4, 5, 6, 5, 4])
}