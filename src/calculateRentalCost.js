/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalRate = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const longTermRental = 7;
  const shortTermRental = 3;
  const vacationRentalCost = days * dailyRentalRate;

  if (days >= longTermRental) {
    return vacationRentalCost - bigDiscount;
  }

  if (days >= shortTermRental) {
    return vacationRentalCost - smallDiscount;
  }

  return vacationRentalCost;
}

module.exports = calculateRentalCost;
