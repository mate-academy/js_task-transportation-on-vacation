/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DaysWithDiscount = 40;
  const SmullDiscount = 20;
  const BigDiscount = 50;
  const OneDay = 1;
  const Freedays = 3;
  const SevenDays = 7;

  if (days >= OneDay && days < Freedays) {
    return days * DaysWithDiscount;
  }

  if (days >= Freedays && days < SevenDays) {
    return days * DaysWithDiscount - SmullDiscount;
  }

  if (days >= SevenDays) {
    return days * DaysWithDiscount - BigDiscount;
  }
}

module.exports = calculateRentalCost;
