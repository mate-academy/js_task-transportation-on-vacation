/**
 * @param {number} days
 *
 * @return {number}
 */
const SEVEN_AND_MORE_DAYS_DISCOUNT = 50;
const THREE_AND_MORE_DAYS_DISCOUNT = 20;


function calculateRentalCost(days) {

  if (days < 3){
    return days * 40;
  }
  if (days < 7){
    return (days * 40) - THREE_AND_MORE_DAYS_DISCOUNT;
  }
  return (days * 40) - SEVEN_AND_MORE_DAYS_DISCOUNT
}

module.exports = calculateRentalCost;
