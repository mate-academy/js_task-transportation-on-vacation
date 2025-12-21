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
  const discountFirstLevel = 50;
  const discountSecondLevel = 20;

  if (days > zeroDays && days < threeDays) {
    return price * days;
  }

  if (days >= threeDays && days < sevenDays) {
    const result = price * days - discountSecondLevel;

    return result;
  }

  if (days >= sevenDays) {
    const result = price * days - discountFirstLevel;

    return result;
  }
}

module.exports = calculateRentalCost;
