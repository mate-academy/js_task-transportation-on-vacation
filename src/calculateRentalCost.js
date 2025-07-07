/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daylyRentSum = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const oneDayRent = 1;
  const twoDayRent = 2;
  const longRentTime = 7;

  return days === oneDayRent || days === twoDayRent
    ? days * daylyRentSum
    : days >= longRentTime
      ? days * daylyRentSum - longTermDiscount
      : days * daylyRentSum - shortTermDiscount;
}

module.exports = calculateRentalCost;
