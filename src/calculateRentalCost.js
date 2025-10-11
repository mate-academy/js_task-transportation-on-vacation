/**
 * Oblicza koszt wynajmu samochodu na określoną liczbę dni.
 * @param {number} numberOfDays - liczba dni wynajmu
 * @returns {number} - całkowity koszt wynajmu
 */
function calculateRentalCost(numberOfDays) {
  // stałe zamiast magicznych liczb
  const DAILY_RATE = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;

  // walidacja wejścia
  if (typeof numberOfDays !== 'number' || numberOfDays < 0) {
    return 0;
  }

  // early returns zamiast if/else
  if (numberOfDays >= LONG_TERM_DAYS) {
    return numberOfDays * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MID_TERM_DAYS) {
    return numberOfDays * DAILY_RATE - MID_TERM_DISCOUNT;
  }

  return numberOfDays * DAILY_RATE;
}

module.exports = calculateRentalCost;



