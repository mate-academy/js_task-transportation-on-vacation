/**
 * @param {number} days
 *
 * @return {number}
 */

const REGULAR_PRICE = 40;
const AMOUNT_OF_DAYS_FOR_FIFTY_OFF = 7;
const AMOUNT_OF_DAYS_FOR_TWENTY_OFF = 3;

function calculateRentalCost(days) {
  const price = days * REGULAR_PRICE;

  if (days >= AMOUNT_OF_DAYS_FOR_FIFTY_OFF) {
    return price - 50;
  }

  if (days >= AMOUNT_OF_DAYS_FOR_TWENTY_OFF) {
    return price - 20;
  }

  return price;
}

module.exports = calculateRentalCost;
