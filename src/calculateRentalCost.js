/**
 * @param {number} days
 *
 * @return {number}
 */

const RENTCOST = 40;
const MIDTERM = 3;
const LONGTERM = 7;
const MIDTERM_DISCOUNT = 20;
const LONGTERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days >= LONGTERM) {
    return days * RENTCOST - LONGTERM_DISCOUNT;
  }

  if (days >= MIDTERM) {
    return days * RENTCOST - MIDTERM_DISCOUNT;
  }

  return days * RENTCOST;
}

module.exports = calculateRentalCost;
