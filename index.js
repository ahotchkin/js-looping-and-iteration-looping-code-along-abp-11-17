// Code your solutions in this file
const badges = ['Lisa', 'Kaitlin', 'Jan']

function printBadges(badges){
  for (let i=0; i < badges.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i[i]}`)
  }

  return badges;
}

printBadges(badges);
