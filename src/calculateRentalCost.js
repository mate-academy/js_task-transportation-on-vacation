/**
 * @param {number} days
 *
 * @return {number}
 */
const RENT_OF_20 = 20;
const RENT_OF_50 = 50;
const PRICE_DIARY = 40;

function calculateRentalCost(days) {
  // write code here

  if (days < 3) {
    return days * PRICE_DIARY;
  }

  if (days >= 3 && days < 7) {
    const valueDiary = PRICE_DIARY * days;
    const valueFinal = valueDiary - RENT_OF_20;

    return valueFinal;
  }

  if (days >= 7) {
    const valueDiary = PRICE_DIARY * days;
    const valueFinal = valueDiary - RENT_OF_50;

    return valueFinal;
  }
}

module.exports = calculateRentalCost;
