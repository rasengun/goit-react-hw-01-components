import styles from './transactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  const elements = items.map(({ id, type, amount, currency }) => (
    <tr className={styles.table_raw} key={id}>
      <td className={styles.type}>{type}</td>
      <td className={styles.amount}>{amount}</td>
      <td className={styles.currency}>{currency}</td>
    </tr>
  ));

  return (
    <table className={styles.transaction_history}>
      <thead className={styles.table_head}>
        <tr>
          <th className={styles.data}>Type</th>
          <th className={styles.data}>Amount</th>
          <th className={styles.data}>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
