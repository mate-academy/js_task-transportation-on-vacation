/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceDay = 40;
  let descont = 0;

  if (days >= 7) {
    descont = 50;

    return days * priceDay - descont;
  } else if ((days >= 3) && (days < 7)) {
    descont = 20;

    return days * priceDay - descont;
  } else {
    return days * priceDay;
  }
}

module.exports = calculateRentalCost;
