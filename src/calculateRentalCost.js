/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const basicDiscount = 20;
  const greatDiscount = 50;
  let rentCost = days * rentPerDay;

  if (days >= 7) {
    rentCost = rentCost - greatDiscount;

    return rentCost;
  }

  if (days >= 3) {
    rentCost = rentCost - basicDiscount;

    return rentCost;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
