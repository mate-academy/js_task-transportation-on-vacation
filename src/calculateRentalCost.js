/**
 * @param {number} days
 *
 * @return {number}
 */
const oneDayCost = 40;
const longTerm = 7;
const longTermDiscount = 50;
const almostWeek = 3;
const almostWeekDiscount = 20;

function calculateRentalCost(days) {
  let totalAmount = oneDayCost * days;

  if (days >= longTerm) {
    totalAmount = totalAmount - longTermDiscount;

    return totalAmount;
  }

  if (days >= almostWeek) {
    totalAmount = totalAmount - almostWeekDiscount;

    return totalAmount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
