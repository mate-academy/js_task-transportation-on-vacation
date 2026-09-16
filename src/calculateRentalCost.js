/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCarDayCost = 40;
  const longTermDiscount = 50;
  const longTermMinDays = 7;
  const shortTermDiscount = 20;
  const shortTermMinDays = 3;

  if (days >= longTermMinDays) {
    return rentCarDayCost * days - longTermDiscount;
  }

  if (days >= shortTermMinDays) {
    return rentCarDayCost * days - shortTermDiscount;
  }

  return days * rentCarDayCost;
}

module.exports = calculateRentalCost;
