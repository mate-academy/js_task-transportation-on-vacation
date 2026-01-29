/**
 * @param {number} days
 *
 * @return {number}
 */
/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  
  const DISCOUNT_THRESHOLD_BIG = 7;  
  const DISCOUNT_AMOUNT_BIG = 50;   
  
  const DISCOUNT_THRESHOLD_SMALL = 3; 
  const DISCOUNT_AMOUNT_SMALL = 20;   

  const sum = COST_PER_DAY * days;

  if (days >= DISCOUNT_THRESHOLD_BIG) {
    return sum - DISCOUNT_AMOUNT_BIG;
  } 
  
  if (days >= DISCOUNT_THRESHOLD_SMALL) {
    return sum - DISCOUNT_AMOUNT_SMALL;
  } 
  return sum;
}
module.exports = calculateRentalCost;
