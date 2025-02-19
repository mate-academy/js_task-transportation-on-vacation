/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
let day =1;
  let dayRental = 40;
let sevenDaysOff= 50;
let threeDaysOff= 20;

if(days === 1 ){

  let totalOneDay= days * 40

  return totalOneDay

}else if(days >= 7){

 let totalSeven = days * dayRental - sevenDaysOff

return totalSeven

}else if(days >=3 && day <= 6){

  let totalThree = days *dayRental - threeDaysOff
  
  return totalThree
}





}

console.log(calculateRentalCost(7))

//module.exports = calculateRentalCost;
