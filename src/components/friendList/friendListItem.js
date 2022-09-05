import PropTypes from 'prop-types';
import { Fragment } from 'react';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  avatart: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
