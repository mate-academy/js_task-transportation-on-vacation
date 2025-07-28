/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {

if(days <= 0){
  return 0
}
else if(days < 3){
  return days*40
}
else if(days >= 3 && days < 7){
  return (days*40) - 20 
}
else{
  return (days*40) - 50
}
}

module.exports = calculateRentalCost;
