/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalPeriod = days;
  const dailyCost = 40;
  const longTermDays = 7;
  const shortTermDays = 3;
  const longTermDisscoint = 50;
  const shortTermDisscount = 20;
  const rentalCost = rentalPeriod * dailyCost;

  if (rentalPeriod >= longTermDays) {
    return rentalCost - longTermDisscoint;
  }

  if (rentalPeriod >= shortTermDays) {
    return rentalCost - shortTermDisscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
