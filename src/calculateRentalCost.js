/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costCar = 40;
  let sum = costCar * days;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  if (days < 3) {
    return sum;
  }

  if (days < 7) {
    sum -= threeDaysDiscount;

    return sum;
  }

  if (days >= 7) {
    sum -= sevenDaysDiscount;

    return sum;
  }
}

module.exports = calculateRentalCost;
