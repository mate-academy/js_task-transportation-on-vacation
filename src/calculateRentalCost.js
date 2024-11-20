/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPriсe = 40;
  const sevenMoreDaysDiscount = 50;
  const threeMoreDaysDiscount = 20;
  let payment = 0;

  if (days > 6) {
    payment = days * rentPriсe - sevenMoreDaysDiscount;
  } else if (days > 2 && days < 7) {
    payment = days * rentPriсe - threeMoreDaysDiscount;
  } else {
    payment = days * rentPriсe;
  }

  return payment;
}

module.exports = calculateRentalCost;
