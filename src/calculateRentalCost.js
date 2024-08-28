function calculateRentalCost(days) {
  const PRICE = 40;
  const LONGTERMDISCOUNT = 50;
  const LONGTERM = 7;
  const SHORTTERMDISCOUNT = 20;
  const SHORTTERM = 3;
  const TOTALCOST = days * PRICE;

  if (days >= LONGTERM) {
    return TOTALCOST - LONGTERMDISCOUNT;
  }

  if (days >= SHORTTERM) {
    return TOTALCOST - SHORTTERMDISCOUNT;
  }

  return TOTALCOST;
}

module.exports = calculateRentalCost;
