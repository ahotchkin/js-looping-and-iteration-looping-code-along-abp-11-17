// Code your solutions in this file
const badges = ['Joe', 'Gabe'];

function printBadges(badges){
  for (let i = 0; i < badges.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #[badges.length]`)
  }

  return badges;
}
