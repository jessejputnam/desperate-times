export default function formatMoney(amount: number = 0): string {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  };

  // If clean dollar amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter: Intl.NumberFormat = new Intl.NumberFormat("en-US", options);

  return formatter.format(amount / 100);
}
