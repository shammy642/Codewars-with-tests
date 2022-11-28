function solution(number){
    var sum = 0;
    if (number<=0) return 0; 
    else {
      for (i=1; i<number; i++){
        if (i % 3 == 0 || i % 5 == 0){
          sum += i; 
        }   
      }
    }
    return sum
  }

module.exports = solution;