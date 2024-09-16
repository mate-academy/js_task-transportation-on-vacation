/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let amount = 0;
  const rentalCost = 40 * days;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    amount += rentalCost - bigDiscount;
  } else if (days >= 3) {
    amount += rentalCost - smallDiscount;
  } else {
    amount += rentalCost;
  };

  return amount;
}

module.exports = calculateRentalCost;
