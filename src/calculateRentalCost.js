/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  const smallOffer = 20;
  const bigOffer = 50;
  const longTerm = 7;
  const shortTerm = 3;


  if (days < shortTerm) {
    return days * rentalCost;
  }

  if (days >= shortTerm && days < longTerm) {
    return days * rentalCost - smallOffer;
  }

  if (days >= longTerm) {
    return days * rentalCost - bigOffer;
  }
}

module.exports = calculateRentalCost;
