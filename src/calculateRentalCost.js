/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const discountThreeMoreDays = 20;
  const discountSevenMoreDays = 50;
  const costRent = 40;
  let rent = 0;

  if (days >= 7) {
    rent = days * costRent - discountSevenMoreDays;
  } else if (days >= 3) {
    rent = days * costRent - discountThreeMoreDays;
  } else {
    rent = days * costRent;
  }

  return rent;
}

module.exports = calculateRentalCost;
