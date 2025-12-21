/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const zeroDays = 0;
  const threeDays = 3;
  const sevenDays = 7;
  const price = 40;
  const discountFisrtLevel = 50;
  const discountSecondLevel = 20;

  if (days > zeroDays && days < threeDays) {
    return price * days;
  }

  if (days >= threeDays && days < sevenDays) {
    let result = price * days;

    result = result - discountSecondLevel;

    return result;
  }

  if (days >= 7) {
    let result = price * days;

    result = result - discountFisrtLevel;

    return result;
  }
}

module.exports = calculateRentalCost;
