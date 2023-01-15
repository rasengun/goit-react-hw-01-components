import styles from './friendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ avatar, name, isOnline, id }) => {
    const styleOnline = isOnline
      ? `${styles.check} ${styles.online}`
      : `${styles.check}`;

    return (
      <li key={id} className={styles.item}>
        <span className={styleOnline}></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    );
  });

  return <ul className={styles.list}>{elements}</ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
