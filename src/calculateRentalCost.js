/**
 * @param {number} days
 *
 * @return {number}
 */
const discountsDays1 = 3;
const discountsDays2 = 7;
const discount1 = 20;
const discount2 = 50;

function calculateRentalCost(days) {
  if (days < discountsDays1) {
    return days * 40;
  } else if (days >= discountsDays1 && days < discountsDays2) {
    return days * 40 - discount1;
  } else if (days >= discountsDays2) {
    return days * 40 - discount2;
  }
}

module.exports = calculateRentalCost;
