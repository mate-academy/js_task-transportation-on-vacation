/**
 * @param {number} days
 *
 * @return {number}
 */
/**
 * Calculates the rental cost based on the number of days rented,
 * applying different discounts based on the duration.
 *
 * @param {number} days - The number of days the item is rented for.
 * @return {number} The total rental cost.
 */
function calculateRentalCost(days) {
  const dailyRate = 40;

  if (days < 3) {
    return days * dailyRate;
  } else if (days >= 3 && days <= 6) {
    return days * dailyRate - 20;
  } else {
    return days * dailyRate - 50;
  }
}

module.exports = calculateRentalCost;
