/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTermDiscountDays = 7;
  const shortTermDiscountDays = 3;
  const carPricePerDay = 40;
  const carPricePerRent = days * carPricePerDay;

  if (days >= longTermDiscountDays) {
    return carPricePerRent - 50;
  } else if (days >= shortTermDiscountDays && days < longTermDiscountDays) {
    return carPricePerRent - 20;
  } else {
    return carPricePerRent;
  }
}

module.exports = calculateRentalCost;
