/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let res = 0;
  const dayCost = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= 7) {
    res = days * dayCost - longTermDiscount;

    return res;
  }

  if (days >= 3) {
    res = days * dayCost - shortTermDiscount;

    return res;
  } else {
    res = days * dayCost;

    return res;
  }
}

module.exports = calculateRentalCost;
