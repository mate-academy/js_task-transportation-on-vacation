/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let amount;
  let discount;
  const DAYCOST = 40;

  if (days < 3) {
    discount = 0;
  } else if (days < 7) {
    discount = 20;
  } else {
    discount = 50;
  }

  if (days >= 0) {
    if (days < 3) {
      amount = Number(days) * DAYCOST - discount;
    } else if (days < 7) {
      amount = Number(days) * DAYCOST - discount;
    } else {
      amount = Number(days) * DAYCOST - discount;
    }

    return amount;
  }
}
module.exports = calculateRentalCost;
