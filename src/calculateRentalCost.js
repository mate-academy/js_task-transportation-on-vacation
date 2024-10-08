/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;

/*
Every day you rent the car costs $40. If you rent the
car for 7 or more days, you get $50 off your total.
Alternatively, if you rent the car for 3 or more days,
you get $20 off your total.

Implement calculateRentalCost function that returns
the total amount for different number of days.
*/
