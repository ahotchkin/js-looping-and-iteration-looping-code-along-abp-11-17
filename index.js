// Code your solutions in this file
function printBadges(arrayNames){
  for (let i = 0; i < arrayNames.length; i++){
    console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  }

  return arrayNames;
}

function coinToss(){
  return Math.random() => 0.5;
}

function tailsNeverFails(){
  while (coinToss()){
    console.log `You got ${counter} tails in a row.`
  }

}
