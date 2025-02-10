/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;

  const rentForDay = 40;

  const longTermRentDays = 7;
  const longTermRentDiscount = 50;

  const shortTermRentDays = 3;
  const shortTermRentDiscount = 20;

  if (days >= longTermRentDays) {
    discount = longTermRentDiscount;
  } else if (days >= shortTermRentDays) {
    discount = shortTermRentDiscount;
  }

  return rentForDay * days - discount;
}

module.exports = calculateRentalCost;
