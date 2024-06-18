/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let price = days * 40;
  let smallDiscount = 20;
  let bigDiscount = 50;
  
  if (days >= 7) {
    return price - bigDiscount;
  } 
  
  if (days >=3) {
    return price - smallDiscount;
  }

  return price;
}


module.exports = calculateRentalCost;
