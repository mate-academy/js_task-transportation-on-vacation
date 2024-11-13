/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {

  let TAX_PER_DAY = 40;
  let LONG_TERMIN_DISCOUNT = 50;
  let MIDDLE_TERMIN_DISCOUNT = 20;
  let LONG_TERMIN = 7;
  let MIDLE_TERMIN = 3;

  if (days <= 0) {
    return 0;
  }

  if (days < MIDLE_TERMIN) {
    return days * TAX_PER_DAY;
  } else if (days >= MIDLE_TERMIN && days < LONG_TERMIN) {
    return days * TAX_PER_DAY - MIDDLE_TERMIN_DISCOUNT;
  } else {
    return days * TAX_PER_DAY - LONG_TERMIN_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
