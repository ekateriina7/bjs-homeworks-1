"use strict"
//task1
function getSolutions( a, b, c ) {
    let D = b * b - 4 * a * c;
    let x1;
    let x2;
    if (D < 0) {
      return {D:D}
    } else if (D == 0) {
      x1 =  -b / (2 * a);
      return {roots:[x1], D:D}
    } else if (D > 1) {
     x1 = (-b + Math.sqrt(D)) / (2 * a);
     x2 = (-b - Math.sqrt(D)) / (2 * a);
     return { roots: [ x1, x2 ], D: D};
    }
  }
  
  
  function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log('Значение дискриминанта: ' + result.D);
    if (result.D < 0) {
      console.log('Уравнение не имеет вещественных корней')
    } else if( result.D == 0) {
      console.log('Уравнение имеет один корень X₁ = ' + result.roots)
    } else if (result.D > 0) {
      
      console.log('Уравнение имеет два корня. X₁ = ' + result.roots[0] + ', X₂ = ' + result.roots[1] )
    }
  }
  showSolutionsMessage(1, 2, 3);
  showSolutionsMessage(7, 20, -3);
  showSolutionsMessage(2, 4, 2)

  
  //task2
  function getPersonData(secretData){
    let firstname
    let lastname
    if (secretData.aaa === 0){
      firstname = "Родриго";
    }else if ((secretData.aaa === 1))
    {
      firstname = "Эмильо";
    }
    if (secretData.bbb === 0){
      lastname = "Родриго"
    }else if ((secretData.bbb === 1)){
      lastname = "Эмильо"
    }
    return {firstname: firstname , lastname: lastname}
  }
  
  console.log(getPersonData({
    aaa: 0,
    bbb: 0
  }))
  console.log(getPersonData({
    aaa: 0,
    bbb: 1
  }))
  console.log(getPersonData({
    aaa: 1,
    bbb: 0
  }))
  console.log(getPersonData({
    aaa: 1,
    bbb: 1
  }))


//task3
  function calculateAverage(marks){
    let total = 0;
      for (i = 0; i < marks.length; i += 1) {
        total += marks[i];
    }
    return total / marks.length;
  }
  
  function getAverageScore(scores){
    let average = {};
    let totalcount = 0
    let totalscore = 0
  
    for (key in scores){
      average[key] = calculateAverage(scores[key]) 
      totalscore += calculateAverage(scores[key]) 
      totalcount++
    }
    average["average"] = totalscore/totalcount
    return(average)
    
  }
  
  console.log(getAverageScore({
    algebra: [1,1,1],
    geometry: [6,2,1,5],
    history: [6,2,1,5],
  }))