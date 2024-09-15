/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;
  const costCar = 40;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  if (days < 3) {
    sum = costCar * days;

    return sum;
  }

  if (days >= 3 && days <= 6) {
    sum = costCar * days - threeDaysDiscount;

    return sum;
  }

  if (days >= 7) {
    sum = costCar * days - sevenDaysDiscount;

    return sum;
  }

  return sum;
}

module.exports = calculateRentalCost;
