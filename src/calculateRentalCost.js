/**
 * @param {number} days
 *
 * @return {number}
 */
const oneDayRentCost = 40;
const off50 = 50;
const off20 = 20;
let totalAmount = 0;

function calculateRentalCost(days) {
  if (days < 3) {
    totalAmount = oneDayRentCost * days;
  } else if (days < 7) {
    totalAmount = oneDayRentCost * days - off20;
  } else {
    totalAmount = oneDayRentCost * days - off50;
  }
  return totalAmount;
}

module.exports = calculateRentalCost;
