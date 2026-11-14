/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const dayRental = 40;
  const dayStartDiscount = 3;
  const dayBigDiscount = 7;

  if (days < dayStartDiscount) {
    sum = days * dayRental;

    return sum;
  }

  if (days >= dayStartDiscount && days < dayBigDiscount) {
    sum = days * dayRental - smallDiscount;

    return sum;
  }

  if (days >= dayBigDiscount) {
    sum = days * dayRental - bigDiscount;

    return sum;
  }
}

module.exports = calculateRentalCost;
