import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';
import s from './FriendList.module.css'

function FriendList({ friends }) {
  return (
    <ul className={s.friend__list}>
      {friends.map(friend => (     
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
      ))}
    </ul>
  );
}

export default FriendList

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
