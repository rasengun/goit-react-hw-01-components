import styles from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
