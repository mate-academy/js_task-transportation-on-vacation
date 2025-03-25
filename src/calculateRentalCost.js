

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const shortTerm = 3;
  const longTerm = 7;
  const dailyPrice = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  
  let total = 0;

  total = days * dailyPrice;

  if( days >= longTerm ) {
    return total - longTermDiscount;
  }
  
  if( days >= shortTerm ) {
    return total - shortTermDiscount;
  } 

  return total;
}

module.exports = calculateRentalCost;
