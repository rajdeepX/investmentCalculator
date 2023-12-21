import style from "./Table.module.css";

const formatNumber = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  return (
    <table className={style.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatNumber.format(item.savingsEndOfYear)}</td>
            <td>{formatNumber.format(item.yearlyInterest)}</td>
            <td>
              {formatNumber.format(
                item.savingsEndOfYear -
                  props.initialInvestment -
                  item.yearlyContribution * item.year
              )}
            </td>
            <td>
              {formatNumber.format(
                props.initialInvestment + item.yearlyContribution * item.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
