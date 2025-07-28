/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {

const pricePerDay = 40

const longTime = 7

const longTimeDiscount = 50

const shortTime = 3

const shorTimeDiscount = 20



if(days <= 0){
  return 0
}
if(days < shortTime){
  return days*pricePerDay
}
if(days >= shortTime && days < longTime){   
  return (days*pricePerDay) - shorTimeDiscount
}
else{
  return (days*pricePerDay) - longTimeDiscount
}
}

module.exports = calculateRentalCost;
