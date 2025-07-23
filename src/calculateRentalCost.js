/**
 * @param {number} days
 *
 * @return {number}
 */

const basePrice = 40;
const longReservation = 7;
const longReservationDiscount = 50;
const mediumReservation = 3;
const mediumReservationDiscount = 20;

function calculateRentalCost(days) {
  if (days >= longReservation) {
    return days * basePrice - longReservationDiscount;
  } else if (days >= mediumReservation) {
    return days * basePrice - mediumReservationDiscount;
  }

  return days * basePrice;
}

module.exports = calculateRentalCost;
