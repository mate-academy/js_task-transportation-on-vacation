/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let rentalCost = 40;

  if(days >= 7){
    return rentalCost * days - 50;
  }
  if(days >= 3){
    return rentalCost * days - 20;
  }

  return rentalCost * days;

}

module.exports = calculateRentalCost;
