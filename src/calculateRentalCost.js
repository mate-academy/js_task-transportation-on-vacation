/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const valorPorDia = 40;
  const aluguelDia = days * valorPorDia;
  const descontoTresDias = 20;
  const descontoSeteDias = 50;
  const aluguelSeteDias = aluguelDia - descontoSeteDias;
  const aluguelTresDias = aluguelDia - descontoTresDias;

  const tresDias = 3;
  const seteDias = 7;

  if (days < tresDias) {
    return aluguelDia;
  }

  if (days >= tresDias && days < seteDias) {
    return aluguelTresDias;
  }

  if (days >= seteDias) {
    return aluguelSeteDias;
  }
}

module.exports = calculateRentalCost;
