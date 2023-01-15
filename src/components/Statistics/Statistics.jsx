import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, dataStats }) => {
  const elements = dataStats.map(({ id, label, percentage }) => (
    <li key={id} className={styles.item}>
      <span className={styles.label}> {label}</span>
      <span className={styles.percentage}> {percentage}%</span>
    </li>
  ));

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}> {title}</h2>}
      <ul className={styles.list}> {elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  dataStats: PropTypes.array.isRequired,
};
