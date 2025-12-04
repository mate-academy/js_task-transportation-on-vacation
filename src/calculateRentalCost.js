/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const SEVEN_DAY_DISCOUNT = 50;
  const TRHEE_DAY_DISCOUNT = 20;
  const NUMBER_OF_DAYS_SEVEN = 7;
  const NUMBER_OF_DAYS_THREE = 3;

  if (days >= NUMBER_OF_DAYS_SEVEN) {
    return days * price - SEVEN_DAY_DISCOUNT;
  }

  if (days >= NUMBER_OF_DAYS_THREE) {
    return days * price - TRHEE_DAY_DISCOUNT;
  }

  return days * price;
}

module.exports = calculateRentalCost;
