/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentDayCost = 40;
  const longTermOfRent = 7;
  const longTermDiscount = 50;
  const shortTermOfRent = 3;
  const shortTermDiscount = 20;

  const cost = days * rentDayCost;

  if(days >= longTermOfRent) {
    return cost - longTermDiscount;
  }
  
  if(days > 6) {
    return cost - 50;
  }

  if(days >= shortTermOfRent ) {
    return cost - shortTermDiscount;
  }



  if(days > 2) {
    return cost - 20;
  }

  return cost;
}

module.exports = calculateRentalCost;
