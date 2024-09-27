/**
 * @param {number} days
 *
 * @return {number}
 */
/* const days =
parseInt(prompt('Please enter number of days for rent a car'), 10); */

function calculateRentalCost(days) {
  const priceOfRent = 40;

  const paysRental = (days > 6)
    ? (days * priceOfRent - 50)
    : (days > 2)
      ? (days * priceOfRent - 20)
      : (days * priceOfRent);

  return paysRental;
};

module.exports = calculateRentalCost;
