/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;
  const shortTerm = 3;
  const longTerm = 7;
  const amountPerDay = 40;
  const shortTermDiscaunt = 20;
  const longTermDiscaunt = 50;

  totalAmount = days * amountPerDay;

  if (days >= longTerm) {
    return totalAmount - longTermDiscaunt;
  }

  if (days >= shortTerm) {
    return totalAmount - shortTermDiscaunt;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
